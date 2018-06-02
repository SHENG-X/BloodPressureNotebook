self.addEventListener('install', function(event){
      console.log('Service Worker Installed!', event);
        event.waitUntil(
              caches.open('static').then(function (cache) {
                    return cache.addAll([
                          '/',
                          '/app-sw.js',
                          'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
                          '/static/js/bundle.js',
                    ]);
              })
        );
      });

self.addEventListener('activate',
      function(event) {
            console.log('Service Worker activated!', event);
            return self.clients.claim();
      });
self.addEventListener('fetch',
      function (event) {
            // Let the browser do its default thing
            // for non-GET requests.
            console.log('Service Worker fetch!', event);
            if (event.request.method != 'GET') return;

            // Prevent the default, and handle the request ourselves.
            event.respondWith(async function () {
                  // Try to get the response from a cache.
                  const cache = await caches.open('static');
                  const cachedResponse = await cache.match(event.request);

                  if (cachedResponse) {
                        // If we found a match in the cache, return it, but also
                        // update the entry in the cache in the background.
                        return cachedResponse;
                  }

                  // If we didn't find a match in the cache, use the network.
                  return fetch(event.request);
            }());
      });
