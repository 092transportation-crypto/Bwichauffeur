/* eslint-disable */
/**
 * Post-build prerender step.
 *
 * CRA produces a pure client-side SPA: without this step every URL serves the
 * same empty shell with the homepage <title> and no canonical, so crawlers and
 * the TCR/DCA SMS reviewer (which fetch without executing JavaScript) cannot
 * tell pages apart or read /privacy-policy and /booking.
 *
 * Every route listed in public/sitemap-static.xml is server-rendered with
 * scripts/ssr.js (the real React pages inside StaticRouter — no browser
 * needed; the previous headless-Chromium approach never ran on Vercel) and
 * written to build/<route>/index.html. Vercel serves those files ahead of the
 * catch-all SPA rewrite; in the browser React hydrates the same markup.
 *
 * A route that fails to render is skipped (it stays an SPA route) and the
 * build never fails because of prerendering.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BUILD_DIR = path.join(ROOT, "build");

function routesFromSitemap() {
  const xml = fs.readFileSync(path.join(BUILD_DIR, "sitemap-static.xml"), "utf8");
  const seen = new Set();
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    try {
      seen.add(new URL(m[1]).pathname.replace(/(.)\/+$/, "$1"));
    } catch {}
  }
  return [...seen];
}

// Per-page tags come from react-helmet; drop the shell's defaults they replace.
function buildHtml(shell, { html, title, head }) {
  let out = shell;
  if (title) out = out.replace(/<title>[\s\S]*?<\/title>/, "");
  out = out.replace("</head>", `${title}${head}</head>`);
  return out.replace(/<div id="root">\s*<\/div>/, `<div id="root">${html}</div>`);
}

function main() {
  const shellPath = path.join(BUILD_DIR, "index.html");
  if (!fs.existsSync(shellPath)) throw new Error(`No build found at ${BUILD_DIR}. Run the build first.`);
  const shell = fs.readFileSync(shellPath, "utf8");
  // Untouched SPA shell for routes without a static file (vercel.json rewrites
  // to it) — index.html itself becomes the prerendered homepage below.
  fs.writeFileSync(path.join(BUILD_DIR, "shell.html"), shell, "utf8");

  // React logs unknown-attribute warnings through console.error during SSR.
  const origError = console.error;
  console.error = () => {};
  const { renderPath } = require("./ssr");

  let ok = 0;
  const failed = [];
  const routes = routesFromSitemap();
  // "/" last: it overwrites the shell every other page is built from.
  for (const route of [...routes.filter((r) => r !== "/"), "/"]) {
    try {
      const page = renderPath(route);
      if (!page.html || !/<h1/.test(page.html)) throw new Error("empty render");
      const file = route === "/" ? shellPath : path.join(BUILD_DIR, route, "index.html");
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, buildHtml(shell, page), "utf8");
      ok++;
    } catch (err) {
      failed.push(`${route}: ${err && err.message}`);
    }
  }
  console.error = origError;
  console.log(`[prerender] wrote ${ok} static pages (of ${routes.length} routes).`);
  if (failed.length) console.warn("[prerender] skipped:\n  " + failed.join("\n  "));
}

try {
  main();
} catch (err) {
  console.warn("\n[prerender] WARNING: prerendering was skipped:", err && err.stack ? err.stack : err);
  process.exit(0);
}
