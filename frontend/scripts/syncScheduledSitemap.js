/* eslint-disable */
/**
 * Prebuild step for scheduled publishing (src/lib/publishSchedule.js).
 *
 * public/sitemap-static.xml is hand-maintained, and scripts/prerender.js takes
 * its route list from it. So that a post flagged `scheduled: true` goes live on
 * its date with no manual commit (the daily cron in api/cron/rebuild.js
 * redeploys the site), this step reconciles the sitemap with the publish
 * cutoff before every build:
 *   - a scheduled post that is now live and missing from the sitemap is added
 *     (lastmod = its date, so the entry is identical on every later rebuild);
 *   - a scheduled post that is not live yet is removed if someone listed it.
 * Every other URL, and its lastmod, is left exactly as committed. With no
 * scheduled posts the file is not touched. Idempotent.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITEMAP = path.join(ROOT, "public", "sitemap-static.xml");
const ORIGIN = "https://www.bwichauffeur.com";

function main() {
  // Same on-the-fly Babel compile of src/ that the prerender uses.
  require("./ssr").install();
  const { ALL_BLOG_POSTS } = require(path.join(ROOT, "src", "data", "blogPosts.js"));
  const { ALL_GUIDES } = require(path.join(ROOT, "src", "data", "guides.js"));
  const { isPublished, PUBLISH_CUTOFF } = require(path.join(ROOT, "src", "lib", "publishSchedule.js"));

  const scheduled = [
    ...ALL_BLOG_POSTS.filter((p) => p && p.scheduled === true).map((p) => ({ p, loc: `${ORIGIN}/blog/${p.slug}` })),
    ...ALL_GUIDES.filter((p) => p && p.scheduled === true).map((p) => ({ p, loc: `${ORIGIN}/${p.slug}` })),
  ];
  if (!scheduled.length) {
    console.log("[sitemap-schedule] no scheduled posts; sitemap unchanged.");
    return;
  }

  const original = fs.readFileSync(SITEMAP, "utf8");
  let xml = original;
  const added = [];
  const removed = [];
  const urlBlock = (loc) =>
    new RegExp(`[ \\t]*<url>\\s*<loc>${loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc>[\\s\\S]*?</url>\\r?\\n?`, "g");

  for (const { p, loc } of scheduled) {
    const present = xml.includes(`<loc>${loc}</loc>`);
    if (isPublished(p)) {
      if (present) continue;
      const lastmod = /^\d{4}-\d{2}-\d{2}$/.test(p.date) ? p.date : PUBLISH_CUTOFF;
      const entry =
        `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n` +
        `    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
      xml = xml.replace("</urlset>", `${entry}</urlset>`);
      added.push(loc);
    } else if (present) {
      xml = xml.replace(urlBlock(loc), "");
      removed.push(loc);
    }
  }

  if (xml !== original) fs.writeFileSync(SITEMAP, xml, "utf8");
  console.log(
    `[sitemap-schedule] cutoff ${PUBLISH_CUTOFF}: ${scheduled.length} scheduled, ` +
      `${added.length} added, ${removed.length} removed.` +
      (added.length ? `\n  + ${added.join("\n  + ")}` : "") +
      (removed.length ? `\n  - ${removed.join("\n  - ")}` : "")
  );
}

main();
