#!/usr/bin/env node
import { readFile, access } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SITE = path.join(ROOT, "site");
const BASE = "https://www.assemblage23.it";
let errors = 0;
let warnings = 0;

function pass(message) { console.log(`PASS  ${message}`); }
function warn(message) { warnings++; console.warn(`WARN  ${message}`); }
function fail(message) { errors++; console.error(`FAIL  ${message}`); }
async function readSiteFile(name) {
  try { return await readFile(path.join(SITE, name), "utf8"); }
  catch { fail(`Required file missing/unreadable: site/${name}`); return ""; }
}
async function existsSiteFile(name) {
  try { await access(path.join(SITE, name)); return true; }
  catch { return false; }
}
function metaTag(html, attr, value) {
  const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const tag = html.match(new RegExp(`<meta\\b[^>]*\\b${attr}=["']${escaped}["'][^>]*>`, "i"));
  if (!tag) return null;
  return tag[0].match(/\bcontent=["']([^"']*)["']/i)?.[1] ?? null;
}

const html = await readSiteFile("index.html");
const robots = await readSiteFile("robots.txt");
const sitemap = await readSiteFile("sitemap.xml");
const manifestText = await readSiteFile("site.webmanifest");
const notFound = await readSiteFile("404.html");

if (html) {
  if (/\blang=["']it["']/i.test(html)) pass("document language is Italian (lang=it)");
  else fail("homepage must declare <html lang=\"it\">");

  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim() ?? "";
  if (title && title.length <= 70) pass(`title present (${title.length} characters)`);
  else fail("title is missing or exceeds 70 characters");

  const description = metaTag(html, "name", "description");
  if (description && description.length >= 50 && description.length <= 160) {
    pass(`meta description present (${description.length} characters)`);
  } else fail("meta description is missing or outside the 50–160 character target");

  const canonical = html.match(/<link\b[^>]*\brel=["']canonical["'][^>]*\bhref=["']([^"']+)["'][^>]*>/i)?.[1]
    ?? html.match(/<link\b[^>]*\bhref=["']([^"']+)["'][^>]*\brel=["']canonical["'][^>]*>/i)?.[1];
  if (canonical === `${BASE}/`) pass("canonical points to the production homepage");
  else fail(`canonical must be ${BASE}/ (found: ${canonical ?? "missing"})`);

  const ogUrl = metaTag(html, "property", "og:url");
  if (ogUrl === canonical) pass("Open Graph URL matches canonical URL");
  else fail("og:url is missing or differs from canonical");

  if (metaTag(html, "property", "og:title") && metaTag(html, "property", "og:description")) {
    pass("Open Graph title and description exist");
  } else fail("Open Graph title/description missing");

  if (metaTag(html, "name", "twitter:card")) pass("Twitter/X card metadata exists");
  else fail("Twitter/X card metadata missing");

  if (!metaTag(html, "property", "og:image")) warn("og:image is not configured; social previews may lack a hero image");
  if (metaTag(html, "name", "twitter:card") === "summary") {
    warn("twitter:card is summary; evaluate summary_large_image after providing a suitable licensed image");
  }

  const jsonLd = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  let websiteSchemaFound = false;
  for (const match of jsonLd) {
    try {
      const schema = JSON.parse(match[1].trim());
      const entries = Array.isArray(schema) ? schema : [schema];
      if (entries.some(item => item?.["@type"] === "WebSite" && item?.url === canonical)) {
        websiteSchemaFound = true;
      }
    } catch { fail("Invalid JSON-LD: could not parse a structured-data script"); }
  }
  if (websiteSchemaFound) pass("WebSite JSON-LD parses and matches canonical URL");
  else fail("matching WebSite JSON-LD not found");

  if (/This page requires JavaScript to display/i.test(html)) {
    warn("homepage starts as a JavaScript-rendered bundle; test rendered HTML and consider prerender/static semantic content");
  }
}

if (robots) {
  if (/^User-agent:\s*\*/m.test(robots)) pass("robots.txt declares a general crawler policy");
  else fail("robots.txt has no User-agent: * rule");
  if (robots.includes(`Sitemap: ${BASE}/sitemap.xml`)) pass("robots.txt points to the production sitemap");
  else fail("robots.txt sitemap URL is missing or incorrect");
}

if (sitemap) {
  const locs = [...sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map(m => m[1].trim());
  if (locs.length > 0) pass(`sitemap contains ${locs.length} URL entries`);
  else fail("sitemap contains no <loc> URLs");

  if (new Set(locs).size === locs.length) pass("sitemap URLs are unique");
  else fail("sitemap contains duplicate URLs");

  const offDomain = locs.filter(url => {
    try { const u = new URL(url); return u.protocol !== "https:" || u.hostname !== "www.assemblage23.it"; }
    catch { return true; }
  });
  if (offDomain.length === 0) pass("sitemap URLs all use the canonical HTTPS hostname");
  else fail(`sitemap contains ${offDomain.length} invalid/off-domain URLs`);

  if (!locs.includes(`${BASE}/`)) fail("homepage is missing from sitemap");
  else pass("homepage is present in sitemap");

  if (!/<lastmod>[^<]+<\/lastmod>/i.test(sitemap)) {
    warn("sitemap has no lastmod values; add reliable dates only when page modification dates are tracked");
  }
}

if (manifestText) {
  try {
    const manifest = JSON.parse(manifestText);
    if (manifest.lang === "it-IT") pass("web manifest language is it-IT");
    else fail("web manifest language should be it-IT");
    for (const icon of manifest.icons ?? []) {
      const relative = icon.src?.replace(/^\//, "");
      if (!relative || !(await existsSiteFile(relative))) fail(`manifest icon is missing: ${icon.src}`);
    }
    if ((manifest.icons ?? []).length) pass("manifest icons resolve to existing files");
    else warn("web manifest defines no icons");
  } catch { fail("site.webmanifest is not valid JSON"); }
}

if (await existsSiteFile("favicon.svg")) pass("SVG favicon exists");
else fail("favicon.svg is missing");

if (notFound) {
  if (/<meta\s+name=["']robots["']\s+content=["']noindex["']/i.test(notFound)) {
    pass("404 page is marked noindex");
  } else warn("confirm that the 404 page carries robots noindex");
}

console.log(`\nSEO audit completed: ${errors} error(s), ${warnings} warning(s).`);
if (errors > 0) process.exitCode = 1;
