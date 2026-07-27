#!/usr/bin/env node
/**
 * Submit all sitemap URLs to IndexNow (Bing / Yandex / Seznam / Naver).
 * Usage: node scripts/submit-indexnow.mjs
 * Optional: INDEXNOW_BASE=https://privateturkeytour.com node scripts/submit-indexnow.mjs
 */

const KEY = "0b6acc093d60bbd0651c7784e6c6b240";
const HOST = "privateturkeytour.com";
const BASE = (process.env.INDEXNOW_BASE || `https://${HOST}`).replace(/\/$/, "");
const KEY_LOCATION = `${BASE}/${KEY}.txt`;

const ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

async function fetchSitemapUrls() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  return [...new Set(urls)];
}

async function verifyKeyFile() {
  const res = await fetch(KEY_LOCATION);
  const body = (await res.text()).trim();
  if (!res.ok) throw new Error(`key file HTTP ${res.status}`);
  if (body !== KEY) throw new Error(`key file mismatch: got "${body}"`);
  return true;
}

async function submit(endpoint, urlList) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });
  const text = await res.text();
  return { endpoint, status: res.status, body: text.slice(0, 200) };
}

async function main() {
  console.log(`Base: ${BASE}`);
  await verifyKeyFile();
  console.log("Key file OK:", KEY_LOCATION);

  const urls = await fetchSitemapUrls();
  console.log(`URLs from sitemap: ${urls.length}`);

  // IndexNow accepts up to 10,000 URLs per request; we have ~40
  for (const endpoint of ENDPOINTS) {
    try {
      const result = await submit(endpoint, urls);
      console.log(
        `${result.status} ${result.endpoint}${result.body ? ` — ${result.body}` : ""}`,
      );
    } catch (err) {
      console.error(`FAIL ${endpoint}:`, err instanceof Error ? err.message : err);
    }
  }

  console.log("Done. Bing/Yandex will crawl; Google still needs Search Console sitemap.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
