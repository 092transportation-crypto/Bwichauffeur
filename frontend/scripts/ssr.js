/* eslint-disable */
// Server-side renderer used by scripts/prerender.js. Compiles src/ on the fly
// with Babel (CRA's own presets are already installed) and renders the real
// <AppShell> for a given path inside StaticRouter + HelmetProvider, so the
// static HTML is exactly what React produces in the browser — no browser needed.
const fs = require("fs");
const path = require("path");
const Module = require("module");

const SRC = path.resolve(__dirname, "..", "src");
let ready = false;

function install() {
  if (ready) return;
  ready = true;
  const babel = require("@babel/core");
  const opts = {
    babelrc: false,
    configFile: false,
    presets: [[require.resolve("@babel/preset-react"), { runtime: "automatic" }]],
    plugins: [require.resolve("@babel/plugin-transform-modules-commonjs")],
  };
  const compile = (module, filename) => {
    const code = babel.transformSync(fs.readFileSync(filename, "utf8"), { ...opts, filename }).code;
    module._compile(code, filename);
  };
  const origJs = Module._extensions[".js"];
  Module._extensions[".jsx"] = compile;
  Module._extensions[".js"] = (module, filename) =>
    filename.startsWith(SRC + path.sep) ? compile(module, filename) : origJs(module, filename);
  for (const ext of [".css", ".scss"]) Module._extensions[ext] = () => {};
  for (const ext of [".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif"])
    Module._extensions[ext] = (module, filename) => { module.exports = "/" + path.basename(filename); };

  // "@/x" -> src/x (mirrors craco/jsconfig alias)
  const origResolve = Module._resolveFilename;
  Module._resolveFilename = function (request, ...rest) {
    if (request.startsWith("@/")) request = path.join(SRC, request.slice(2));
    return origResolve.call(this, request, ...rest);
  };
}

// -> { html, head: { title, tags } }
function renderPath(urlPath) {
  install();
  const React = require("react");
  const { renderToString } = require("react-dom/server");
  const { StaticRouter } = require("react-router-dom");
  const { HelmetProvider } = require("@dr.pogodin/react-helmet");
  const { AppShell } = require(path.join(SRC, "App.js"));

  let h;
  const html = renderToString(
    React.createElement(
      HelmetProvider,
      { onServerState: (state) => { h = state; } },
      React.createElement("div", { className: "App" },
        React.createElement(StaticRouter, { location: urlPath }, React.createElement(AppShell)))
    )
  );
  return {
    html,
    title: h ? h.title.toString() : "",
    head: h ? [h.meta, h.link, h.script].map((x) => (x ? x.toString() : "")).join("") : "",
  };
}

module.exports = { renderPath };
