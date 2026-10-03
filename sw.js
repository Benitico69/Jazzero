/* Jazzero · service worker
   - La página (index.html y demás archivos propios): primero la red, para que
     siempre se vea la última versión publicada; sin conexión, la copia guardada.
   - Todo lo externo (muestras de sonido, la librería smplr, las tipografías):
     primero la copia guardada; si no está, se descarga y se guarda. Son archivos
     que no cambian, así que basta con bajarlos una vez.
   Cambia APP_VERSION en cada versión para renovar la copia de la página. */
const APP_VERSION = '1.9';
// la beta (/beta/) guarda su página aparte, para no borrar la copia de la versión oficial ni al revés
const APP_PREFIX = self.registration.scope.includes('/beta/') ? 'jazzero-beta-app-' : 'jazzero-app-';
const APP_CACHE = APP_PREFIX + APP_VERSION;
const ASSET_CACHE = 'jazzero-assets-v1';   // sonidos y librerías: se conservan entre versiones y se comparten
// la guitarra «real» (audio/): muestras propias, siempre las mismas. Si se cambian los archivos, sube el número
const AUDIO_CACHE = 'jazzero-audio-v1';

const APP_FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/jazzero-icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(APP_CACHE).then(cache => cache.addAll(APP_FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys
        .filter(k => k.startsWith(APP_PREFIX) && k !== APP_CACHE)
        .map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request) {
  const cache = await caches.open(APP_CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch (err) {
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    if (request.mode === 'navigate') return cache.match('./index.html');
    throw err;
  }
}

async function cacheFirst(request, name = ASSET_CACHE) {
  const cache = await caches.open(name);
  const cached = await cache.match(request);
  if (cached) return cached;
  let response;
  try { response = await fetch(request); } catch (err) { return Response.error(); }   // sin red y sin copia: error limpio
  // solo se guardan respuestas completas (las parciales, 206, no se pueden guardar)
  if (response.status === 200 || response.type === 'opaque') cache.put(request, response.clone());
  return response;
}

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
  if (url.origin === self.location.origin && /\/audio\//.test(url.pathname)) event.respondWith(cacheFirst(request, AUDIO_CACHE));
  else if (url.origin === self.location.origin) event.respondWith(networkFirst(request));
  else event.respondWith(cacheFirst(request));
});
