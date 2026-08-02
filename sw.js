/* こんちゅうずかん Service Worker
 *
 * - アプリ本体(HTML/CSS/JS/アイコン)はインストール時にキャッシュし、以降は
 *   stale-while-revalidate(キャッシュを即返しつつ裏で更新)で配信する。
 *   これにより CACHE_VERSION を上げ忘れても次回アクセスで最新になる。
 * - 音声(19MB以上ある)とWikimediaの写真は量が多いので事前キャッシュはせず、
 *   一度読み込んだものをキャッシュファースト(= 変化しない前提)で再利用する。
 * - 「オフラインで つかえるように する」ボタンからは script.js が
 *   ASSET_CACHE を直接開いて全部まとめて入れる(下の名前と合わせること)。
 */
const CACHE_VERSION = "v1";
const SHELL_CACHE = `konchu-zukan-shell-${CACHE_VERSION}`;
const ASSET_CACHE = `konchu-zukan-assets-${CACHE_VERSION}`;
const CURRENT_CACHES = [SHELL_CACHE, ASSET_CACHE];

const SHELL_ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./icons/icon-32.png",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      // 1つでも失敗すると addAll 全体が失敗するので個別に入れる
      .then((cache) => Promise.all(SHELL_ASSETS.map((url) => cache.add(url).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => !CURRENT_CACHES.includes(k)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// 写真・音声のような「一度取れたら変わらない」ファイル用
async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && (response.ok || response.type === "opaque")) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    // オフラインでキャッシュにも無い場合は、呼び出し側(onerror等)に任せる
    return Response.error();
  }
}

// アプリ本体用: キャッシュを即返しつつ、裏でネットワークから更新しておく
async function staleWhileRevalidate(request, cacheName) {
  const cached = await caches.match(request);
  const network = fetch(request)
    .then((response) => {
      if (response && response.ok) {
        caches.open(cacheName).then((cache) => cache.put(request, response.clone()));
      }
      return response;
    })
    .catch(() => null);
  return cached || (await network) || Response.error();
}

// ページ遷移(アドレスバーからの読み込み・ホーム画面からの起動)
async function navigationHandler(request) {
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(SHELL_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    return (await caches.match(request)) || (await caches.match("./index.html")) || Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  if (request.mode === "navigate") {
    event.respondWith(navigationHandler(request));
    return;
  }

  if (url.origin === self.location.origin) {
    if (/\.(wav|mp3|png|jpg|jpeg|svg)$/i.test(url.pathname)) {
      event.respondWith(cacheFirst(request, ASSET_CACHE));
    } else {
      event.respondWith(staleWhileRevalidate(request, SHELL_CACHE));
    }
    return;
  }

  if (url.hostname === "upload.wikimedia.org") {
    event.respondWith(cacheFirst(request, ASSET_CACHE));
  }
});
