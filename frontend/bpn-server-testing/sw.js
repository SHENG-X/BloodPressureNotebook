self.addEventListener('install', function(event){
      console.log('Service Worker Installed!', event);
        event.waitUntil(
              caches.open('static-v2').then(function (cache) {
				  console.log('adding cache');
                    return cache.addAll([
						   '/',
						   '/bpn/',
							'/bpn/sw.js',
	                       '/bpn/index.html',
						   '/bpn/static/css/main.762f50c5.css',
	  					   '/bpn/static/js/main.eaa0268b.js',
	                       '/bpn/app-sw.js',
	                       '/bpn//favicon.ico',
	                       'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
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
		  	console.log(event.request);
			
            // Prevent the default, and handle the request ourselves.
            event.respondWith(async function () {
                  // Try to get the response from a cache.
                  const cache = await caches.open('static-v2');
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
