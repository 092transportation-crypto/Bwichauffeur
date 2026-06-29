/**
 * Post-build prerender step.
 *
 * CRA produces a pure client-side SPA: every route serves an empty
 * `<div id="root"></div>`, so crawlers and the TCR/DCA SMS reviewer (which
 * fetch without executing JavaScript) cannot read pages like /privacy-policy.
 *
 * This script boots the freshly built bundle in headless Chromium, renders the
 * compliance-critical routes, and writes the fully-rendered HTML to
 * `build/<route>/index.html`. Those static files are served by Vercel ahead of
 * the catch-all SPA rewrite, so:
 *   - no-JS clients (crawlers / SMS reviewer) get the real, readable content;
 *   - JS clients load the same bundle and React hydrates the markup.
 *
 * The captured markup already contains the correct hashed <script>/<link>
 * tags from build/index.html, so no asset paths need patching.
 */
const fs = require("fs");
const http = require("http");
const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "..", "build");

// Routes whose content must be present in the raw HTML response.
const ROUTES = [
  { path: "/privacy-policy", waitFor: '[data-testid="mobile-opt-in-data-statement"]' },
  { path: "/booking", waitFor: '[data-testid="quote-sms-consent"]' },
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

// Serve build/ statically; fall back to index.html so the SPA boots for routes
// that don't yet have a generated file (which is all of them at this point).
function createServer() {
  return http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    let filePath = path.join(BUILD_DIR, urlPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    // SPA fallback.
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    fs.createReadStream(path.join(BUILD_DIR, "index.html")).pipe(res);
  });
}

async function main() {
  if (!fs.existsSync(path.join(BUILD_DIR, "index.html"))) {
    throw new Error(`No build found at ${BUILD_DIR}. Run the build first.`);
  }

  // puppeteer is an optionalDependency: it may be absent (or its Chromium
  // download may have been skipped) in some build environments. Require it
  // lazily so that case is handled gracefully rather than crashing at load.
  const puppeteer = require("puppeteer");

  const server = createServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  const base = `http://127.0.0.1:${port}`;

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();

      // Avoid hanging on long-lived analytics connections (e.g. PostHog).
      await page.setRequestInterception(true);
      page.on("request", (request) => {
        if (/posthog/i.test(request.url())) request.abort();
        else request.continue();
      });

      const url = `${base}${route.path}`;
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
      await page.waitForSelector(route.waitFor, { timeout: 45000 });
      // Let react-helmet flush <head> tags and any final paint settle.
      await new Promise((r) => setTimeout(r, 500));

      const html = "<!doctype html>\n" + (await page.content()).replace(/^<!doctype html>/i, "");

      const outDir = path.join(BUILD_DIR, route.path);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");

      console.log(`prerendered ${route.path} -> build${route.path}/index.html`);
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  // Never fail the build because of prerendering. If Chromium is unavailable in
  // the build environment, the site still deploys (serverless functions and the
  // SPA work); only the static prerendered HTML for /privacy-policy and
  // /booking is skipped. Logged loudly so it can be addressed.
  console.warn("\n[prerender] WARNING: prerendering was skipped:", err && err.message);
  console.warn("[prerender] The deploy will continue without static prerendered HTML.\n");
  process.exit(0);
});
