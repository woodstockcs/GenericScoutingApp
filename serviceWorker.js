const staticScouting = "archytas-scouting-app-v1"
const assets = [
  "/",
  "p5.min.js",
  "/index.html",
  "/app.js",
  "/512.png",
  "/192.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticScouting).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
})
