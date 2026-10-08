#!/usr/bin/env node
// Full SEO audit over build/**/index.html. Prints concrete findings, no eyeballing.
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const BUILD = path.join(ROOT, "build");
const HOST = "https://www.bwichauffeur.com";

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name === "index.html") out.push(full);
  }
  return out;
}

const files = walk(BUILD);
console.log(`Scanning ${files.length} prerendered pages...\n`);

const pages = files.map((f) => {
  const html = fs.readFileSync(f, "utf8");
  const rel = path.relative(BUILD, f).replace(/index\.html$/, "");
  const route = "/" + rel.replace(/\\/g, "/").replace(/\/$/, "");
  return { file: f, route: route === "/" ? "/" : route, html };
});

const routeSet = new Set(pages.map((p) => p.route));
// also treat the raw file existing without trailing normalization
const existingPaths = new Set();
for (const f of files) {
  const rel = "/" + path.relative(BUILD, path.dirname(f)).replace(/\\/g, "/");
  existingPaths.add(rel === "/." ? "/" : rel);
}

let issues = { title: [], desc: [], dupTitle: {}, dupDesc: {}, dupContent: {}, brokenLinks: [], missingTitle: [], missingCanonical: [], badJsonLd: [], sitemapBad: [], missingH1: [], brokenImages: [] };

const titleMap = new Map();
const descMap = new Map();
const contentMap = new Map();

for (const p of pages) {
  const titleMatch = p.html.match(/<title[^>]*>([^<]*)<\/title>/);
  const title = titleMatch ? titleMatch[1].trim() : "";
  if (!title) issues.missingTitle.push(p.route);
  else {
    if (!titleMap.has(title)) titleMap.set(title, []);
    titleMap.get(title).push(p.route);
  }

  // meta description: find any <meta ...> tag containing name="description", then pull its content attr
  let desc = "";
  const metaRe = /<meta\b[^>]*>/g;
  let mm;
  while ((mm = metaRe.exec(p.html))) {
    const tag = mm[0];
    if (/name="description"/.test(tag)) {
      const c = tag.match(/content="([^"]*)"/);
      desc = c ? c[1].trim() : "";
      break;
    }
  }
  if (!desc) issues.desc.push(p.route);
  else {
    if (!descMap.has(desc)) descMap.set(desc, []);
    descMap.get(desc).push(p.route);
  }

  // canonical: find any <link ...> tag containing rel="canonical"
  let canon = "";
  const linkRe = /<link\b[^>]*>/g;
  let lm2;
  while ((lm2 = linkRe.exec(p.html))) {
    const tag = lm2[0];
    if (/rel="canonical"/.test(tag)) {
      const h = tag.match(/href="([^"]*)"/);
      canon = h ? h[1].trim() : "";
      break;
    }
  }
  const expectedCanon = HOST + (p.route === "/" ? "" : p.route);
  if (!canon || (canon.replace(/\/$/, "") !== expectedCanon.replace(/\/$/, ""))) {
    issues.missingCanonical.push({ route: p.route, found: canon });
  }

  // H1 count
  const h1Matches = p.html.match(/<h1[\s>]/g) || [];
  if (h1Matches.length !== 1) {
    issues.missingH1.push({ route: p.route, count: h1Matches.length });
  }

  // body content fingerprint (strip tags/whitespace from <main> or body, ignoring nav/footer)
  const mainMatch = p.html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  const bodySrc = mainMatch ? mainMatch[1] : p.html;
  const textOnly = bodySrc.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const fingerprint = textOnly.slice(0, 2000); // first 2000 chars as fingerprint
  if (fingerprint.length > 100) {
    if (!contentMap.has(fingerprint)) contentMap.set(fingerprint, []);
    contentMap.get(fingerprint).push(p.route);
  }

  // internal links — only real <a> navigation, not <link>/<base> etc.
  const aRe = /<a\b[^>]*href="([^"]+)"[^>]*>/g;
  let m;
  while ((m = aRe.exec(p.html))) {
    let href = m[1];
    if (/^(https?:|mailto:|tel:|#|javascript:)/.test(href)) {
      if (href.startsWith(HOST)) href = href.slice(HOST.length) || "/";
      else continue;
    }
    href = href.split("#")[0].split("?")[0];
    if (!href) continue;
    const normalized = href.replace(/\/$/, "") || "/";
    if (!existingPaths.has(normalized) && normalized !== "") {
      issues.brokenLinks.push({ from: p.route, href: m[1] });
    }
  }

  // images
  const srcRe = /src="(\/[^"http][^"]*\.(?:png|jpe?g|webp|svg|gif|avif))"/gi;
  let im;
  while ((im = srcRe.exec(p.html))) {
    const imgPath = im[1].split("?")[0];
    const onDisk = path.join(ROOT, "public", imgPath);
    const onDiskBuild = path.join(BUILD, imgPath);
    if (!fs.existsSync(onDisk) && !fs.existsSync(onDiskBuild)) {
      issues.brokenImages.push({ route: p.route, src: imgPath });
    }
  }

  // JSON-LD validity
  const ldRe = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let lm;
  while ((lm = ldRe.exec(p.html))) {
    try {
      const data = JSON.parse(lm[1]);
      const type = data["@type"];
      if (type === "FAQPage") {
        const n = (data.mainEntity || []).length;
        if (n < 1) issues.badJsonLd.push({ route: p.route, reason: `FAQPage has ${n} entities` });
      }
      if (type === "BlogPosting") {
        if (!data.headline || !data.datePublished) {
          issues.badJsonLd.push({ route: p.route, reason: "BlogPosting missing headline/datePublished" });
        }
      }
      if (type === "LocalBusiness" || (Array.isArray(data["@type"]))) {
        // ok, loose check
      }
    } catch (e) {
      issues.badJsonLd.push({ route: p.route, reason: "invalid JSON: " + e.message.slice(0, 80) });
    }
  }
}

for (const [title, routes] of titleMap) if (routes.length > 1) issues.dupTitle[title] = routes;
for (const [desc, routes] of descMap) if (routes.length > 1) issues.dupDesc[desc] = routes;
for (const [fp, routes] of contentMap) if (routes.length > 1) issues.dupContent[fp.slice(0, 80)] = routes;

// sitemap check
const sitemapPath = path.join(ROOT, "public", "sitemap-static.xml");
let sitemapUrls = [];
if (fs.existsSync(sitemapPath)) {
  const xml = fs.readFileSync(sitemapPath, "utf8");
  sitemapUrls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
// vercel.json redirects
let redirectSources = new Set();
const vercelJsonPath = path.join(ROOT, "vercel.json");
if (fs.existsSync(vercelJsonPath)) {
  try {
    const vj = JSON.parse(fs.readFileSync(vercelJsonPath, "utf8"));
    for (const r of vj.redirects || []) {
      if (r.source) redirectSources.add(r.source.replace(/\/\(.*/, "").replace(/:.*$/, ""));
    }
  } catch (e) {}
}
for (const url of sitemapUrls) {
  const route = url.replace(HOST, "").replace(/\/$/, "") || "/";
  if (!existingPaths.has(route)) {
    issues.sitemapBad.push({ url, reason: "no matching build page" });
  }
}

const out = {
  totalPages: pages.length,
  missingTitle: issues.missingTitle,
  missingDesc: issues.desc,
  dupTitle: issues.dupTitle,
  dupDesc: issues.dupDesc,
  dupContent: issues.dupContent,
  missingCanonical: issues.missingCanonical,
  missingH1: issues.missingH1,
  brokenLinks: issues.brokenLinks,
  brokenImages: issues.brokenImages,
  badJsonLd: issues.badJsonLd,
  sitemapBad: issues.sitemapBad,
};

fs.writeFileSync(path.join(__dirname, "seo-audit-report.json"), JSON.stringify(out, null, 2));

console.log("=== SEO AUDIT SUMMARY ===");
console.log("Total pages:", out.totalPages);
console.log("Missing title:", out.missingTitle.length);
console.log("Missing description:", out.missingDesc.length);
console.log("Duplicate title groups:", Object.keys(out.dupTitle).length, "-> pages affected:", Object.values(out.dupTitle).flat().length);
console.log("Duplicate description groups:", Object.keys(out.dupDesc).length, "-> pages affected:", Object.values(out.dupDesc).flat().length);
console.log("Duplicate content groups:", Object.keys(out.dupContent).length, "-> pages affected:", Object.values(out.dupContent).flat().length);
console.log("Missing/incorrect canonical:", out.missingCanonical.length);
console.log("Missing H1 (or >1 H1):", out.missingH1.length);
console.log("Broken internal links:", out.brokenLinks.length);
console.log("Broken internal images:", out.brokenImages.length);
console.log("Invalid JSON-LD:", out.badJsonLd.length);
console.log("Sitemap URLs with no matching page:", out.sitemapBad.length);
console.log("\nFull detail written to scripts/seo-audit-report.json");
