/* Lernwelt – Service Worker
   Strategie "erst Netz, dann Cache": Ist Internet da, kommt IMMER die aktuelle
   Version von GitHub (kein Hängenbleiben an alten Dateien). Nur offline wird
   die zuletzt geladene Version aus dem Zwischenspeicher genommen.
   Große Mediendateien (Audio, Video, PDF) werden nicht zwischengespeichert. */

const CACHE = "lernwelt-v1";
const SKIP = /\.(mp4|m4a|mp3|wav|webm|mov|pdf)$/i;

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;
  if (SKIP.test(url.pathname) || request.headers.has("range")) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() =>
        caches.match(request, { ignoreSearch: true }).then(
          (hit) => hit || (request.mode === "navigate" ? caches.match("./index.html", { ignoreSearch: true }) : undefined)
        )
      )
  );
});
