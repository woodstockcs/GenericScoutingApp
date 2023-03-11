const staticScouting = "archytas-scouting-app-v1"
const assets = [
  "css/bootstrap.min.css",
  "css/style.css",
  "js/bootstrap.min.js",
  "js/jquery-3.4.1.min.js",
  "js/p5.min.js",
  "js/popper.min.js",
  "js/qr-creator.js",
  "js/qrcode.min.js",
  "/",
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
