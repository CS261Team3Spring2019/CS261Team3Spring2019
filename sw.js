//Code modified from: https://developers.google.com/web/ilt/pwa/lab-caching-files-with-service-worker
const filesToCache = [                                              //cache everything your app will need to load the app shell
    '/',
    // '/htmlSource/gamesScreen.html',
    // '/htmlSource/home.html',
    // '/htmlSource/instructions.html',
    // '/htmlSource/results.html',
    // '/htmlSource/splash.html',
    // '/htmlSource/summary.html',
    // '/images/album-audio-classic-1616470.jpg',
    // '/images/artists-band-concert-2167131.jpg',
    // '/images/BackButton.svg',
    // '/images/BlankButton.svg',
    // '/images/Logo.svg',
    // '/scripts/ajax.thread.js',
    // '/scripts/apiObj.class.js',
    // '/scripts/app.js',
    // '/scripts/content.js',
    // '/scripts/controller.js',
    // '/scripts/noRotate.js',
    // '/scripts/questionObj.class.js',
    // '/scripts/songObj.class.js',
    // '/scripts/userObj.class.js',
    // '/scripts/variables.js',
    // '/style/main.css'
  ];

  // const staticCacheName = 'cachedpages';

  // self.addEventListener('install', event => {                       //If there is not an active Serviceworker install one
  //   console.log('Attempting to install service worker and cache the app shell');
  //   event.waitUntil(                                                //Extend the install call to cache the app shell files
  //     caches.open(staticCacheName)
  //     .then(cache => {
  //       return cache.addAll(filesToCache);
  //     })
  //   );
  // });

  // self.addEventListener('fetch', event => {                         //Intercept client requests and handle them based on cached file availability
  //   console.log('Fetch event for ', event.request.url);
  //   event.respondWith(                                              //Determine what to return to the client based on the request
  //     caches.match(event.request)                                   //If the request matches a cached file
  //     .then(response => {
  //       if (response) {
  //         console.log('Found ', event.request.url, ' in cache');
  //         return response;                                          //return the cached file
  //       }
  //       console.log('Network request for ', event.request.url);
  //       return fetch(event.request)                                 //The requested file was not cached send the request to the server
  //       .then(response => {
  //         if (response.status === 404) {
  //       //return caches.match('pages/404.html');                    //If the server response status is 404, we can display a cached 404 page
  //         }
  //         return caches.open(staticCacheName)                       //Successful server responses can be cached
  //         .then(cache => {
  //           cache.put(event.request.url, response.clone());
  //           return response;
  //         });
  //       });
  //     }).catch(error => {                                           //Response errors can be handled using an offline page
  //       console.log('Error, ', error);
  //       return caches.match('pages/offline.html');
  //     })
  //   );
  // });
