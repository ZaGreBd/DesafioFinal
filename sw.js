const cacheName = "portfolio-v1"
const files = [
  '/DesafioFinal/',
  '/DesafioFinal/index.html',
  '/DesafioFinal/js/index.js',
  '/DesafioFinal/css/index.css',
  "https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous",
  "https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"

]

self.addEventListener('intall', function(evt){
  evt.waitUntil(caches.open(cacheName).then(function(cache){
    console.log('colocando arquivos na cache')
    cache.addAll(files)
  }))
})

self.addEventListener('activate', function(evt){
  console.log("activate sw")
})

self.addEventListener('fetch', function(evt){
  console.log("fetch sw")
  evt.respondWith(
    caches.match(evt.request).then(function(res){
      return res || fetch(evt.request)
    })
  )
})
