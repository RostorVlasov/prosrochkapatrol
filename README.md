# 🦊 FreshCheck — Общественный мониторинг качества товаров

Платформа для автоматизации работы активистов проекта **FreshCheck**. Система позволяет фиксировать нарушения (продажу товаров с истёкшим сроком годности), вести базу данных торговых точек и формировать публичные отчёты по результатам проверок.

---

## Стек технологий

| Слой | Технология |
|---|---|
| Фронтенд / SSR | Nuxt.js (Vue.js) |
| Бэкенд / Админка | Payload CMS (Node.js) |
| База данных | SQLite |
| Пакетный менеджер | npm |

---

## Структура репозитория

пока нет

---

## Локальный запуск

### 1. Клонировать репозиторий

```bash
git clone git@github.com:RostorVlasov/prosrochkapatrol.git
cd prosrochkapatrol
```

### 2. Установить зависимости

```bash
npm install
```

### 3. Создать файл `.env`

```env
PORT=3000
DATABASE_URI=file:./database.sqlite
PAYLOAD_SECRET=super_secret_key_fresh_check_2026
```

### 4. Запустить dev-сервер

```bash
npm run dev
```

После запуска доступно:

- **Сайт** → http://localhost:3000
- **Админка** → http://localhost:3000/admin

---

## Деплой на сервер (Джино)

Обновление production-версии через SSH:

```bash
# Подключиться к серверу
ssh j06939231@7e49d50600f.hosting.myjino.ru

# Перейти в директорию сайта
cd domains/7e49d50600f.hosting.myjino.ru

# Подтянуть изменения из main
git pull origin main
```

> Если изменились зависимости или конфигурация CMS — выполните пересборку приложения на сервере.

```
rostor
├─ README.md
├─ backend
│  ├─ .next
│  │  ├─ BUILD_ID
│  │  ├─ app-path-routes-manifest.json
│  │  ├─ build
│  │  │  ├─ chunks
│  │  │  │  ├─ [root-of-the-server]__0iz~thn._.js
│  │  │  │  ├─ [root-of-the-server]__0iz~thn._.js.map
│  │  │  │  ├─ [root-of-the-server]__0z6~21d._.js
│  │  │  │  ├─ [root-of-the-server]__0z6~21d._.js.map
│  │  │  │  ├─ [turbopack-node]_transforms_webpack-loaders_ts_0z77ki4._.js
│  │  │  │  ├─ [turbopack-node]_transforms_webpack-loaders_ts_0z77ki4._.js.map
│  │  │  │  ├─ [turbopack]_runtime.js
│  │  │  │  └─ [turbopack]_runtime.js.map
│  │  │  ├─ package.json
│  │  │  ├─ webpack-loaders.js
│  │  │  └─ webpack-loaders.js.map
│  │  ├─ build-manifest.json
│  │  ├─ cache
│  │  │  ├─ .previewinfo
│  │  │  ├─ .rscinfo
│  │  │  └─ .tsbuildinfo
│  │  ├─ diagnostics
│  │  │  ├─ build-diagnostics.json
│  │  │  ├─ framework.json
│  │  │  └─ route-bundle-stats.json
│  │  ├─ export-marker.json
│  │  ├─ fallback-build-manifest.json
│  │  ├─ images-manifest.json
│  │  ├─ next-minimal-server.js.nft.json
│  │  ├─ next-server.js.nft.json
│  │  ├─ package.json
│  │  ├─ prerender-manifest.json
│  │  ├─ required-server-files.js
│  │  ├─ required-server-files.json
│  │  ├─ routes-manifest.json
│  │  ├─ server
│  │  │  ├─ app
│  │  │  │  ├─ (frontend)
│  │  │  │  │  ├─ page
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.map
│  │  │  │  │  ├─ page.js.nft.json
│  │  │  │  │  └─ page_client-reference-manifest.js
│  │  │  │  ├─ (payload)
│  │  │  │  │  ├─ admin
│  │  │  │  │  │  └─ [[...segments]]
│  │  │  │  │  │     ├─ page
│  │  │  │  │  │     │  ├─ app-paths-manifest.json
│  │  │  │  │  │     │  ├─ build-manifest.json
│  │  │  │  │  │     │  ├─ next-font-manifest.json
│  │  │  │  │  │     │  ├─ react-loadable-manifest.json
│  │  │  │  │  │     │  └─ server-reference-manifest.json
│  │  │  │  │  │     ├─ page.js
│  │  │  │  │  │     ├─ page.js.map
│  │  │  │  │  │     ├─ page.js.nft.json
│  │  │  │  │  │     └─ page_client-reference-manifest.js
│  │  │  │  │  └─ api
│  │  │  │  │     ├─ [...slug]
│  │  │  │  │     │  ├─ route
│  │  │  │  │     │  │  ├─ app-paths-manifest.json
│  │  │  │  │     │  │  ├─ build-manifest.json
│  │  │  │  │     │  │  └─ server-reference-manifest.json
│  │  │  │  │     │  ├─ route.js
│  │  │  │  │     │  ├─ route.js.map
│  │  │  │  │     │  ├─ route.js.nft.json
│  │  │  │  │     │  └─ route_client-reference-manifest.js
│  │  │  │  │     ├─ graphql
│  │  │  │  │     │  ├─ route
│  │  │  │  │     │  │  ├─ app-paths-manifest.json
│  │  │  │  │     │  │  ├─ build-manifest.json
│  │  │  │  │     │  │  └─ server-reference-manifest.json
│  │  │  │  │     │  ├─ route.js
│  │  │  │  │     │  ├─ route.js.map
│  │  │  │  │     │  ├─ route.js.nft.json
│  │  │  │  │     │  └─ route_client-reference-manifest.js
│  │  │  │  │     └─ graphql-playground
│  │  │  │  │        ├─ route
│  │  │  │  │        │  ├─ app-paths-manifest.json
│  │  │  │  │        │  ├─ build-manifest.json
│  │  │  │  │        │  └─ server-reference-manifest.json
│  │  │  │  │        ├─ route.js
│  │  │  │  │        ├─ route.js.map
│  │  │  │  │        ├─ route.js.nft.json
│  │  │  │  │        └─ route_client-reference-manifest.js
│  │  │  │  ├─ _global-error
│  │  │  │  │  ├─ page
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.map
│  │  │  │  │  ├─ page.js.nft.json
│  │  │  │  │  └─ page_client-reference-manifest.js
│  │  │  │  ├─ _global-error.html
│  │  │  │  ├─ _global-error.meta
│  │  │  │  ├─ _global-error.rsc
│  │  │  │  ├─ _global-error.segments
│  │  │  │  │  ├─ __PAGE__.segment.rsc
│  │  │  │  │  ├─ _full.segment.rsc
│  │  │  │  │  ├─ _head.segment.rsc
│  │  │  │  │  ├─ _index.segment.rsc
│  │  │  │  │  └─ _tree.segment.rsc
│  │  │  │  ├─ _not-found
│  │  │  │  │  ├─ page
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.map
│  │  │  │  │  ├─ page.js.nft.json
│  │  │  │  │  └─ page_client-reference-manifest.js
│  │  │  │  ├─ _not-found.html
│  │  │  │  ├─ _not-found.meta
│  │  │  │  ├─ _not-found.rsc
│  │  │  │  ├─ _not-found.segments
│  │  │  │  │  ├─ _full.segment.rsc
│  │  │  │  │  ├─ _head.segment.rsc
│  │  │  │  │  ├─ _index.segment.rsc
│  │  │  │  │  ├─ _not-found
│  │  │  │  │  │  └─ __PAGE__.segment.rsc
│  │  │  │  │  ├─ _not-found.segment.rsc
│  │  │  │  │  └─ _tree.segment.rsc
│  │  │  │  ├─ api
│  │  │  │  └─ my-route
│  │  │  │     ├─ route
│  │  │  │     │  ├─ app-paths-manifest.json
│  │  │  │     │  ├─ build-manifest.json
│  │  │  │     │  └─ server-reference-manifest.json
│  │  │  │     ├─ route.js
│  │  │  │     ├─ route.js.map
│  │  │  │     ├─ route.js.nft.json
│  │  │  │     └─ route_client-reference-manifest.js
│  │  │  ├─ app-paths-manifest.json
│  │  │  ├─ chunks
│  │  │  │  ├─ [externals]_next_dist_compiled_@vercel_og_index_node_00__rw~.js
│  │  │  │  ├─ [externals]_next_dist_compiled_@vercel_og_index_node_00__rw~.js.map
│  │  │  │  ├─ [root-of-the-server]__02qd_p5._.js
│  │  │  │  ├─ [root-of-the-server]__02qd_p5._.js.map
│  │  │  │  ├─ [root-of-the-server]__057hv4d._.js
│  │  │  │  ├─ [root-of-the-server]__057hv4d._.js.map
│  │  │  │  ├─ [root-of-the-server]__092s.9b._.js
│  │  │  │  ├─ [root-of-the-server]__092s.9b._.js.map
│  │  │  │  ├─ [root-of-the-server]__0b1~5du._.js
│  │  │  │  ├─ [root-of-the-server]__0b1~5du._.js.map
│  │  │  │  ├─ [root-of-the-server]__0has0ki._.js
│  │  │  │  ├─ [root-of-the-server]__0has0ki._.js.map
│  │  │  │  ├─ [root-of-the-server]__0kiqo3l._.js
│  │  │  │  ├─ [root-of-the-server]__0kiqo3l._.js.map
│  │  │  │  ├─ [root-of-the-server]__102j3ak._.js
│  │  │  │  ├─ [root-of-the-server]__102j3ak._.js.map
│  │  │  │  ├─ [turbopack]_runtime.js
│  │  │  │  ├─ [turbopack]_runtime.js.map
│  │  │  │  ├─ _09gpzxm._.js
│  │  │  │  ├─ _09gpzxm._.js.map
│  │  │  │  ├─ _next-internal_server_app_(payload)_api_[___slug]_route_actions_0fi7ygn.js
│  │  │  │  ├─ _next-internal_server_app_(payload)_api_[___slug]_route_actions_0fi7ygn.js.map
│  │  │  │  ├─ _next-internal_server_app_(payload)_api_graphql-playground_route_actions_0j0kzcn.js
│  │  │  │  ├─ _next-internal_server_app_(payload)_api_graphql-playground_route_actions_0j0kzcn.js.map
│  │  │  │  ├─ _next-internal_server_app_(payload)_api_graphql_route_actions_0y_g7-a.js
│  │  │  │  ├─ _next-internal_server_app_(payload)_api_graphql_route_actions_0y_g7-a.js.map
│  │  │  │  ├─ _next-internal_server_app_my-route_route_actions_04sp~i~.js
│  │  │  │  ├─ _next-internal_server_app_my-route_route_actions_04sp~i~.js.map
│  │  │  │  └─ ssr
│  │  │  │     ├─ [externals]_crypto_0xrgh93._.js
│  │  │  │     ├─ [externals]_crypto_0xrgh93._.js.map
│  │  │  │     ├─ [root-of-the-server]__06_l7x6._.js
│  │  │  │     ├─ [root-of-the-server]__06_l7x6._.js.map
│  │  │  │     ├─ [root-of-the-server]__0cbmrds._.js
│  │  │  │     ├─ [root-of-the-server]__0cbmrds._.js.map
│  │  │  │     ├─ [root-of-the-server]__0drrvnz._.js
│  │  │  │     ├─ [root-of-the-server]__0drrvnz._.js.map
│  │  │  │     ├─ [root-of-the-server]__0e_-1i6._.js
│  │  │  │     ├─ [root-of-the-server]__0e_-1i6._.js.map
│  │  │  │     ├─ [root-of-the-server]__0fsksb1._.js
│  │  │  │     ├─ [root-of-the-server]__0fsksb1._.js.map
│  │  │  │     ├─ [root-of-the-server]__0hcqxva._.js
│  │  │  │     ├─ [root-of-the-server]__0hcqxva._.js.map
│  │  │  │     ├─ [root-of-the-server]__0i1yiyh._.js
│  │  │  │     ├─ [root-of-the-server]__0i1yiyh._.js.map
│  │  │  │     ├─ [root-of-the-server]__0onmgst._.js
│  │  │  │     ├─ [root-of-the-server]__0onmgst._.js.map
│  │  │  │     ├─ [root-of-the-server]__0tcyn68._.js
│  │  │  │     ├─ [root-of-the-server]__0tcyn68._.js.map
│  │  │  │     ├─ [root-of-the-server]__0zybxei._.js
│  │  │  │     ├─ [root-of-the-server]__0zybxei._.js.map
│  │  │  │     ├─ [root-of-the-server]__0~7qa1l._.js
│  │  │  │     ├─ [root-of-the-server]__0~7qa1l._.js.map
│  │  │  │     ├─ [root-of-the-server]__13ms.~a._.js
│  │  │  │     ├─ [root-of-the-server]__13ms.~a._.js.map
│  │  │  │     ├─ [turbopack]_runtime.js
│  │  │  │     ├─ [turbopack]_runtime.js.map
│  │  │  │     ├─ _00u0s3a._.js
│  │  │  │     ├─ _00u0s3a._.js.map
│  │  │  │     ├─ _04k31wa._.js
│  │  │  │     ├─ _04k31wa._.js.map
│  │  │  │     ├─ _09mhrmu._.js
│  │  │  │     ├─ _09mhrmu._.js.map
│  │  │  │     ├─ _0bqlz9v._.js
│  │  │  │     ├─ _0bqlz9v._.js.map
│  │  │  │     ├─ _0xpgci4._.js
│  │  │  │     ├─ _0xpgci4._.js.map
│  │  │  │     ├─ _0ycbo~g._.js
│  │  │  │     ├─ _0ycbo~g._.js.map
│  │  │  │     ├─ _next-internal_server_app_(frontend)_page_actions_0wpzz4j.js
│  │  │  │     ├─ _next-internal_server_app_(frontend)_page_actions_0wpzz4j.js.map
│  │  │  │     ├─ _next-internal_server_app_(payload)_admin_[[___segments]]_page_actions_06ifn-o.js
│  │  │  │     ├─ _next-internal_server_app_(payload)_admin_[[___segments]]_page_actions_06ifn-o.js.map
│  │  │  │     ├─ _next-internal_server_app__global-error_page_actions_0k77kol.js
│  │  │  │     ├─ _next-internal_server_app__global-error_page_actions_0k77kol.js.map
│  │  │  │     ├─ _next-internal_server_app__not-found_page_actions_0eq97pa.js
│  │  │  │     ├─ _next-internal_server_app__not-found_page_actions_0eq97pa.js.map
│  │  │  │     ├─ src_app_(frontend)_layout_tsx_0iabq94._.js
│  │  │  │     └─ src_app_(frontend)_layout_tsx_0iabq94._.js.map
│  │  │  ├─ functions-config-manifest.json
│  │  │  ├─ interception-route-rewrite-manifest.js
│  │  │  ├─ middleware-build-manifest.js
│  │  │  ├─ middleware-manifest.json
│  │  │  ├─ next-font-manifest.js
│  │  │  ├─ next-font-manifest.json
│  │  │  ├─ pages
│  │  │  │  ├─ 404.html
│  │  │  │  └─ 500.html
│  │  │  ├─ pages-manifest.json
│  │  │  ├─ prefetch-hints.json
│  │  │  ├─ server-reference-manifest.js
│  │  │  └─ server-reference-manifest.json
│  │  ├─ standalone
│  │  │  ├─ .next
│  │  │  │  ├─ BUILD_ID
│  │  │  │  ├─ app-path-routes-manifest.json
│  │  │  │  ├─ build-manifest.json
│  │  │  │  ├─ package.json
│  │  │  │  ├─ prerender-manifest.json
│  │  │  │  ├─ required-server-files.json
│  │  │  │  ├─ routes-manifest.json
│  │  │  │  └─ server
│  │  │  │     ├─ app
│  │  │  │     │  ├─ (frontend)
│  │  │  │     │  │  ├─ page
│  │  │  │     │  │  │  ├─ app-paths-manifest.json
│  │  │  │     │  │  │  ├─ build-manifest.json
│  │  │  │     │  │  │  ├─ next-font-manifest.json
│  │  │  │     │  │  │  ├─ react-loadable-manifest.json
│  │  │  │     │  │  │  └─ server-reference-manifest.json
│  │  │  │     │  │  ├─ page.js
│  │  │  │     │  │  ├─ page.js.map
│  │  │  │     │  │  ├─ page.js.nft.json
│  │  │  │     │  │  └─ page_client-reference-manifest.js
│  │  │  │     │  ├─ (payload)
│  │  │  │     │  │  ├─ admin
│  │  │  │     │  │  │  └─ [[...segments]]
│  │  │  │     │  │  │     ├─ page
│  │  │  │     │  │  │     │  ├─ app-paths-manifest.json
│  │  │  │     │  │  │     │  ├─ build-manifest.json
│  │  │  │     │  │  │     │  ├─ next-font-manifest.json
│  │  │  │     │  │  │     │  ├─ react-loadable-manifest.json
│  │  │  │     │  │  │     │  └─ server-reference-manifest.json
│  │  │  │     │  │  │     ├─ page.js
│  │  │  │     │  │  │     ├─ page.js.map
│  │  │  │     │  │  │     ├─ page.js.nft.json
│  │  │  │     │  │  │     └─ page_client-reference-manifest.js
│  │  │  │     │  │  └─ api
│  │  │  │     │  │     ├─ [...slug]
│  │  │  │     │  │     │  ├─ route
│  │  │  │     │  │     │  │  ├─ app-paths-manifest.json
│  │  │  │     │  │     │  │  ├─ build-manifest.json
│  │  │  │     │  │     │  │  └─ server-reference-manifest.json
│  │  │  │     │  │     │  ├─ route.js
│  │  │  │     │  │     │  ├─ route.js.map
│  │  │  │     │  │     │  ├─ route.js.nft.json
│  │  │  │     │  │     │  └─ route_client-reference-manifest.js
│  │  │  │     │  │     ├─ graphql
│  │  │  │     │  │     │  ├─ route
│  │  │  │     │  │     │  │  ├─ app-paths-manifest.json
│  │  │  │     │  │     │  │  ├─ build-manifest.json
│  │  │  │     │  │     │  │  └─ server-reference-manifest.json
│  │  │  │     │  │     │  ├─ route.js
│  │  │  │     │  │     │  ├─ route.js.map
│  │  │  │     │  │     │  ├─ route.js.nft.json
│  │  │  │     │  │     │  └─ route_client-reference-manifest.js
│  │  │  │     │  │     └─ graphql-playground
│  │  │  │     │  │        ├─ route
│  │  │  │     │  │        │  ├─ app-paths-manifest.json
│  │  │  │     │  │        │  ├─ build-manifest.json
│  │  │  │     │  │        │  └─ server-reference-manifest.json
│  │  │  │     │  │        ├─ route.js
│  │  │  │     │  │        ├─ route.js.map
│  │  │  │     │  │        ├─ route.js.nft.json
│  │  │  │     │  │        └─ route_client-reference-manifest.js
│  │  │  │     │  ├─ _global-error
│  │  │  │     │  │  ├─ page
│  │  │  │     │  │  │  ├─ app-paths-manifest.json
│  │  │  │     │  │  │  ├─ build-manifest.json
│  │  │  │     │  │  │  ├─ next-font-manifest.json
│  │  │  │     │  │  │  ├─ react-loadable-manifest.json
│  │  │  │     │  │  │  └─ server-reference-manifest.json
│  │  │  │     │  │  ├─ page.js
│  │  │  │     │  │  ├─ page.js.map
│  │  │  │     │  │  ├─ page.js.nft.json
│  │  │  │     │  │  └─ page_client-reference-manifest.js
│  │  │  │     │  ├─ _global-error.html
│  │  │  │     │  ├─ _global-error.meta
│  │  │  │     │  ├─ _global-error.rsc
│  │  │  │     │  ├─ _global-error.segments
│  │  │  │     │  │  ├─ __PAGE__.segment.rsc
│  │  │  │     │  │  ├─ _full.segment.rsc
│  │  │  │     │  │  ├─ _head.segment.rsc
│  │  │  │     │  │  ├─ _index.segment.rsc
│  │  │  │     │  │  └─ _tree.segment.rsc
│  │  │  │     │  ├─ _not-found
│  │  │  │     │  │  ├─ page
│  │  │  │     │  │  │  ├─ app-paths-manifest.json
│  │  │  │     │  │  │  ├─ build-manifest.json
│  │  │  │     │  │  │  ├─ next-font-manifest.json
│  │  │  │     │  │  │  ├─ react-loadable-manifest.json
│  │  │  │     │  │  │  └─ server-reference-manifest.json
│  │  │  │     │  │  ├─ page.js
│  │  │  │     │  │  ├─ page.js.map
│  │  │  │     │  │  ├─ page.js.nft.json
│  │  │  │     │  │  └─ page_client-reference-manifest.js
│  │  │  │     │  ├─ _not-found.html
│  │  │  │     │  ├─ _not-found.meta
│  │  │  │     │  ├─ _not-found.rsc
│  │  │  │     │  ├─ _not-found.segments
│  │  │  │     │  │  ├─ _full.segment.rsc
│  │  │  │     │  │  ├─ _head.segment.rsc
│  │  │  │     │  │  ├─ _index.segment.rsc
│  │  │  │     │  │  ├─ _not-found
│  │  │  │     │  │  │  └─ __PAGE__.segment.rsc
│  │  │  │     │  │  ├─ _not-found.segment.rsc
│  │  │  │     │  │  └─ _tree.segment.rsc
│  │  │  │     │  ├─ api
│  │  │  │     │  └─ my-route
│  │  │  │     │     ├─ route
│  │  │  │     │     │  ├─ app-paths-manifest.json
│  │  │  │     │     │  ├─ build-manifest.json
│  │  │  │     │     │  └─ server-reference-manifest.json
│  │  │  │     │     ├─ route.js
│  │  │  │     │     ├─ route.js.map
│  │  │  │     │     ├─ route.js.nft.json
│  │  │  │     │     └─ route_client-reference-manifest.js
│  │  │  │     ├─ app-paths-manifest.json
│  │  │  │     ├─ chunks
│  │  │  │     │  ├─ [externals]_next_dist_compiled_@vercel_og_index_node_00__rw~.js
│  │  │  │     │  ├─ [root-of-the-server]__02qd_p5._.js
│  │  │  │     │  ├─ [root-of-the-server]__057hv4d._.js
│  │  │  │     │  ├─ [root-of-the-server]__092s.9b._.js
│  │  │  │     │  ├─ [root-of-the-server]__0b1~5du._.js
│  │  │  │     │  ├─ [root-of-the-server]__0has0ki._.js
│  │  │  │     │  ├─ [root-of-the-server]__0kiqo3l._.js
│  │  │  │     │  ├─ [root-of-the-server]__102j3ak._.js
│  │  │  │     │  ├─ [turbopack]_runtime.js
│  │  │  │     │  ├─ _09gpzxm._.js
│  │  │  │     │  ├─ _next-internal_server_app_(payload)_api_[___slug]_route_actions_0fi7ygn.js
│  │  │  │     │  ├─ _next-internal_server_app_(payload)_api_graphql-playground_route_actions_0j0kzcn.js
│  │  │  │     │  ├─ _next-internal_server_app_(payload)_api_graphql_route_actions_0y_g7-a.js
│  │  │  │     │  ├─ _next-internal_server_app_my-route_route_actions_04sp~i~.js
│  │  │  │     │  └─ ssr
│  │  │  │     │     ├─ [externals]_crypto_0xrgh93._.js
│  │  │  │     │     ├─ [root-of-the-server]__06_l7x6._.js
│  │  │  │     │     ├─ [root-of-the-server]__0cbmrds._.js
│  │  │  │     │     ├─ [root-of-the-server]__0drrvnz._.js
│  │  │  │     │     ├─ [root-of-the-server]__0e_-1i6._.js
│  │  │  │     │     ├─ [root-of-the-server]__0fsksb1._.js
│  │  │  │     │     ├─ [root-of-the-server]__0hcqxva._.js
│  │  │  │     │     ├─ [root-of-the-server]__0i1yiyh._.js
│  │  │  │     │     ├─ [root-of-the-server]__0onmgst._.js
│  │  │  │     │     ├─ [root-of-the-server]__0tcyn68._.js
│  │  │  │     │     ├─ [root-of-the-server]__0zybxei._.js
│  │  │  │     │     ├─ [root-of-the-server]__0~7qa1l._.js
│  │  │  │     │     ├─ [root-of-the-server]__13ms.~a._.js
│  │  │  │     │     ├─ [turbopack]_runtime.js
│  │  │  │     │     ├─ _00u0s3a._.js
│  │  │  │     │     ├─ _04k31wa._.js
│  │  │  │     │     ├─ _09mhrmu._.js
│  │  │  │     │     ├─ _0bqlz9v._.js
│  │  │  │     │     ├─ _0xpgci4._.js
│  │  │  │     │     ├─ _0ycbo~g._.js
│  │  │  │     │     ├─ _next-internal_server_app_(frontend)_page_actions_0wpzz4j.js
│  │  │  │     │     ├─ _next-internal_server_app_(payload)_admin_[[___segments]]_page_actions_06ifn-o.js
│  │  │  │     │     ├─ _next-internal_server_app__global-error_page_actions_0k77kol.js
│  │  │  │     │     ├─ _next-internal_server_app__not-found_page_actions_0eq97pa.js
│  │  │  │     │     └─ src_app_(frontend)_layout_tsx_0iabq94._.js
│  │  │  │     ├─ functions-config-manifest.json
│  │  │  │     ├─ middleware-build-manifest.js
│  │  │  │     ├─ middleware-manifest.json
│  │  │  │     ├─ next-font-manifest.js
│  │  │  │     ├─ next-font-manifest.json
│  │  │  │     ├─ pages
│  │  │  │     │  ├─ 404.html
│  │  │  │     │  └─ 500.html
│  │  │  │     ├─ pages-manifest.json
│  │  │  │     ├─ prefetch-hints.json
│  │  │  │     ├─ server-reference-manifest.js
│  │  │  │     └─ server-reference-manifest.json
│  │  │  ├─ package.json
│  │  │  └─ server.js
│  │  ├─ static
│  │  │  ├─ chunks
│  │  │  │  ├─ 0-f6f2j6ofutt.js
│  │  │  │  ├─ 0-fg6_jr5lvl_.js
│  │  │  │  ├─ 0.246l9jqj9-0.js
│  │  │  │  ├─ 0.9r2b-zg41lt.js
│  │  │  │  ├─ 00.afnqozjbj0.js
│  │  │  │  ├─ 014dkn4y~00ur.js
│  │  │  │  ├─ 01a3y-bi776qx.js
│  │  │  │  ├─ 02zukhv2q7cmy.js
│  │  │  │  ├─ 037srack-8t2f.css
│  │  │  │  ├─ 03a4.v775wrq5.js
│  │  │  │  ├─ 03~yq9q893hmn.js
│  │  │  │  ├─ 04c51r.2qqcqz.js
│  │  │  │  ├─ 04ozomj-lyw_a.js
│  │  │  │  ├─ 0575~7ezfy5~n.js
│  │  │  │  ├─ 069.y895l3h2d.js
│  │  │  │  ├─ 071trnz-ynw0-.js
│  │  │  │  ├─ 07c-.vb6l6vky.js
│  │  │  │  ├─ 07cr9r.ut1n~1.js
│  │  │  │  ├─ 0_ph_jxinpqtu.js
│  │  │  │  ├─ 0ab38~tnd9gea.js
│  │  │  │  ├─ 0aqpm5mabssqz.js
│  │  │  │  ├─ 0att-9yx3s9ur.js
│  │  │  │  ├─ 0brc~ypvjp5d..js
│  │  │  │  ├─ 0dcu67gngfgpb.js
│  │  │  │  ├─ 0df-tuuo0d0h5.js
│  │  │  │  ├─ 0dm1xsulxwnji.js
│  │  │  │  ├─ 0duzxs1cqq65h.js
│  │  │  │  ├─ 0eucpt_u3h9gh.js
│  │  │  │  ├─ 0eyvr.0-m5e71.js
│  │  │  │  ├─ 0gsa1t9hqrkkl.js
│  │  │  │  ├─ 0h5ep7vnvkd.a.js
│  │  │  │  ├─ 0i.l9589uvx0j.js
│  │  │  │  ├─ 0i1cla7dvnft2.js
│  │  │  │  ├─ 0iubta8ol5_au.js
│  │  │  │  ├─ 0k3a.6yx45r93.js
│  │  │  │  ├─ 0mtcuu7cd2iei.css
│  │  │  │  ├─ 0okqd9d8l.nrg.js
│  │  │  │  ├─ 0p-rwnm1ic.ks.css
│  │  │  │  ├─ 0q26501vrhpit.js
│  │  │  │  ├─ 0qvjfv5n-w52y.js
│  │  │  │  ├─ 0tek4j.6.fhq8.css
│  │  │  │  ├─ 0uqct1mn2ibkq.js
│  │  │  │  ├─ 0uqgm3y7qfyr6.js
│  │  │  │  ├─ 0vd-0hwqmixi_.js
│  │  │  │  ├─ 0vm-j9wj09fwq.js
│  │  │  │  ├─ 0x.73w57rn4ou.js
│  │  │  │  ├─ 0xtlk.~c2v5w7.js
│  │  │  │  ├─ 0yfac96ph14w..js
│  │  │  │  ├─ 0zpgik0h6x7im.js
│  │  │  │  ├─ 105l0~rxs.wfu.js
│  │  │  │  ├─ 118ny4bo-gejf.js
│  │  │  │  ├─ 12-rnf3m0ocwq.js
│  │  │  │  ├─ 13j95br6h7z.a.js
│  │  │  │  ├─ 14a5bvyi9sogj.css
│  │  │  │  ├─ 14xuwe9dgv5-k.js
│  │  │  │  ├─ 151d0ag15pslb.js
│  │  │  │  ├─ 152vql_abz2tk.js
│  │  │  │  ├─ 15f7jd_2el91f.js
│  │  │  │  ├─ 18dno9_n9t8pe.js
│  │  │  │  └─ turbopack-07a.tjy3n4~3q.js
│  │  │  ├─ m4a-lWPjuOlHvYkuoQr6Q
│  │  │  │  ├─ _buildManifest.js
│  │  │  │  ├─ _clientMiddlewareManifest.js
│  │  │  │  └─ _ssgManifest.js
│  │  │  └─ media
│  │  │     ├─ payload-favicon-dark.06d7ht77ra.cn.png
│  │  │     ├─ payload-favicon-light.0fn5njke0l_2y.png
│  │  │     └─ static-og-image.0._uu3.gzyzr2.png
│  │  ├─ trace
│  │  ├─ trace-build
│  │  ├─ turbopack
│  │  └─ types
│  │     ├─ cache-life.d.ts
│  │     ├─ routes.d.ts
│  │     └─ validator.ts
│  ├─ .npmrc
│  ├─ .prettierrc.json
│  ├─ .yarnrc
│  ├─ Dockerfile
│  ├─ README.md
│  ├─ docker-compose.yml
│  ├─ eslint.config.mjs
│  ├─ next-env.d.ts
│  ├─ next.config.ts
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ playwright.config.ts
│  ├─ prosrochkapatrol.db
│  ├─ src
│  │  ├─ app
│  │  │  ├─ (frontend)
│  │  │  │  ├─ layout.tsx
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ styles.css
│  │  │  ├─ (payload)
│  │  │  │  ├─ admin
│  │  │  │  │  ├─ [[...segments]]
│  │  │  │  │  │  ├─ not-found.tsx
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  └─ importMap.js
│  │  │  │  ├─ api
│  │  │  │  │  ├─ [...slug]
│  │  │  │  │  │  └─ route.ts
│  │  │  │  │  ├─ graphql
│  │  │  │  │  │  └─ route.ts
│  │  │  │  │  └─ graphql-playground
│  │  │  │  │     └─ route.ts
│  │  │  │  ├─ custom.scss
│  │  │  │  └─ layout.tsx
│  │  │  └─ my-route
│  │  │     └─ route.ts
│  │  ├─ collections
│  │  │  ├─ Media.ts
│  │  │  └─ Users.ts
│  │  ├─ migrations
│  │  │  ├─ 20260516_152643.json
│  │  │  ├─ 20260516_152643.ts
│  │  │  └─ index.ts
│  │  ├─ payload-types.ts
│  │  └─ payload.config.ts
│  ├─ tests
│  │  ├─ e2e
│  │  │  ├─ admin.e2e.spec.ts
│  │  │  └─ frontend.e2e.spec.ts
│  │  ├─ helpers
│  │  │  ├─ login.ts
│  │  │  └─ seedUser.ts
│  │  └─ int
│  │     └─ api.int.spec.ts
│  ├─ tsconfig.json
│  ├─ vitest.config.mts
│  └─ vitest.setup.ts
├─ deploy.sh
├─ frontend
│  ├─ .nuxt
│  │  ├─ app.config.mjs
│  │  ├─ components.d.ts
│  │  ├─ dev
│  │  │  ├─ index.mjs
│  │  │  └─ index.mjs.map
│  │  ├─ dist
│  │  │  └─ server
│  │  │     ├─ client.manifest.mjs
│  │  │     └─ client.precomputed.mjs
│  │  ├─ imports.d.ts
│  │  ├─ manifest
│  │  │  └─ meta
│  │  │     └─ 2e8f7cff-7574-4c04-99d9-6053c84cadf3.json
│  │  ├─ nitro.json
│  │  ├─ nuxt-fonts-global.css
│  │  ├─ nuxt-icon-client-bundle.mjs
│  │  ├─ nuxt-icon-server-bundle.mjs
│  │  ├─ nuxt.d.ts
│  │  ├─ nuxt.json
│  │  ├─ nuxt.node.d.ts
│  │  ├─ nuxt.shared.d.ts
│  │  ├─ schema
│  │  │  ├─ nuxt.schema.d.ts
│  │  │  └─ nuxt.schema.json
│  │  ├─ tsconfig.app.json
│  │  ├─ tsconfig.json
│  │  ├─ tsconfig.node.json
│  │  ├─ tsconfig.server.json
│  │  ├─ tsconfig.shared.json
│  │  ├─ types
│  │  │  ├─ app.config.d.ts
│  │  │  ├─ build.d.ts
│  │  │  ├─ builder-env.d.ts
│  │  │  ├─ components.d.ts
│  │  │  ├─ imports.d.ts
│  │  │  ├─ layouts.d.ts
│  │  │  ├─ middleware.d.ts
│  │  │  ├─ modules.d.ts
│  │  │  ├─ nitro-config.d.ts
│  │  │  ├─ nitro-imports.d.ts
│  │  │  ├─ nitro-layouts.d.ts
│  │  │  ├─ nitro-middleware.d.ts
│  │  │  ├─ nitro-nuxt.d.ts
│  │  │  ├─ nitro-routes.d.ts
│  │  │  ├─ nitro.d.ts
│  │  │  ├─ plugins.d.ts
│  │  │  ├─ runtime-config.d.ts
│  │  │  ├─ shared-imports.d.ts
│  │  │  ├─ ui.d.ts
│  │  │  └─ vue-shim.d.ts
│  │  ├─ ui
│  │  │  ├─ accordion.ts
│  │  │  ├─ alert.ts
│  │  │  ├─ auth-form.ts
│  │  │  ├─ avatar-group.ts
│  │  │  ├─ avatar.ts
│  │  │  ├─ badge.ts
│  │  │  ├─ banner.ts
│  │  │  ├─ blog-post.ts
│  │  │  ├─ blog-posts.ts
│  │  │  ├─ breadcrumb.ts
│  │  │  ├─ button.ts
│  │  │  ├─ calendar.ts
│  │  │  ├─ card.ts
│  │  │  ├─ carousel.ts
│  │  │  ├─ changelog-version.ts
│  │  │  ├─ changelog-versions.ts
│  │  │  ├─ chat-message.ts
│  │  │  ├─ chat-messages.ts
│  │  │  ├─ chat-palette.ts
│  │  │  ├─ chat-prompt-submit.ts
│  │  │  ├─ chat-prompt.ts
│  │  │  ├─ chat-reasoning.ts
│  │  │  ├─ chat-shimmer.ts
│  │  │  ├─ chat-tool.ts
│  │  │  ├─ checkbox-group.ts
│  │  │  ├─ checkbox.ts
│  │  │  ├─ chip.ts
│  │  │  ├─ collapsible.ts
│  │  │  ├─ color-picker.ts
│  │  │  ├─ command-palette.ts
│  │  │  ├─ container.ts
│  │  │  ├─ context-menu.ts
│  │  │  ├─ dashboard-group.ts
│  │  │  ├─ dashboard-navbar.ts
│  │  │  ├─ dashboard-panel.ts
│  │  │  ├─ dashboard-resize-handle.ts
│  │  │  ├─ dashboard-search-button.ts
│  │  │  ├─ dashboard-search.ts
│  │  │  ├─ dashboard-sidebar-collapse.ts
│  │  │  ├─ dashboard-sidebar-toggle.ts
│  │  │  ├─ dashboard-sidebar.ts
│  │  │  ├─ dashboard-toolbar.ts
│  │  │  ├─ drawer.ts
│  │  │  ├─ dropdown-menu.ts
│  │  │  ├─ editor-drag-handle.ts
│  │  │  ├─ editor-emoji-menu.ts
│  │  │  ├─ editor-mention-menu.ts
│  │  │  ├─ editor-suggestion-menu.ts
│  │  │  ├─ editor-toolbar.ts
│  │  │  ├─ editor.ts
│  │  │  ├─ empty.ts
│  │  │  ├─ error.ts
│  │  │  ├─ field-group.ts
│  │  │  ├─ file-upload.ts
│  │  │  ├─ footer-columns.ts
│  │  │  ├─ footer.ts
│  │  │  ├─ form-field.ts
│  │  │  ├─ form.ts
│  │  │  ├─ header.ts
│  │  │  ├─ index.ts
│  │  │  ├─ input-date.ts
│  │  │  ├─ input-menu.ts
│  │  │  ├─ input-number.ts
│  │  │  ├─ input-tags.ts
│  │  │  ├─ input-time.ts
│  │  │  ├─ input.ts
│  │  │  ├─ kbd.ts
│  │  │  ├─ link.ts
│  │  │  ├─ listbox.ts
│  │  │  ├─ main.ts
│  │  │  ├─ marquee.ts
│  │  │  ├─ modal.ts
│  │  │  ├─ navigation-menu.ts
│  │  │  ├─ page-anchors.ts
│  │  │  ├─ page-aside.ts
│  │  │  ├─ page-body.ts
│  │  │  ├─ page-card.ts
│  │  │  ├─ page-columns.ts
│  │  │  ├─ page-cta.ts
│  │  │  ├─ page-feature.ts
│  │  │  ├─ page-grid.ts
│  │  │  ├─ page-header.ts
│  │  │  ├─ page-hero.ts
│  │  │  ├─ page-links.ts
│  │  │  ├─ page-list.ts
│  │  │  ├─ page-logos.ts
│  │  │  ├─ page-section.ts
│  │  │  ├─ page.ts
│  │  │  ├─ pagination.ts
│  │  │  ├─ pin-input.ts
│  │  │  ├─ popover.ts
│  │  │  ├─ pricing-plan.ts
│  │  │  ├─ pricing-plans.ts
│  │  │  ├─ pricing-table.ts
│  │  │  ├─ progress.ts
│  │  │  ├─ radio-group.ts
│  │  │  ├─ scroll-area.ts
│  │  │  ├─ select-menu.ts
│  │  │  ├─ select.ts
│  │  │  ├─ separator.ts
│  │  │  ├─ sidebar.ts
│  │  │  ├─ skeleton.ts
│  │  │  ├─ slideover.ts
│  │  │  ├─ slider.ts
│  │  │  ├─ stepper.ts
│  │  │  ├─ switch.ts
│  │  │  ├─ table.ts
│  │  │  ├─ tabs.ts
│  │  │  ├─ textarea.ts
│  │  │  ├─ timeline.ts
│  │  │  ├─ toast.ts
│  │  │  ├─ toaster.ts
│  │  │  ├─ tooltip.ts
│  │  │  ├─ tree.ts
│  │  │  └─ user.ts
│  │  ├─ ui-image-component.ts
│  │  └─ ui.css
│  ├─ .output
│  │  ├─ nitro.json
│  │  ├─ public
│  │  │  ├─ _nuxt
│  │  │  │  ├─ BpCbvp2-.js
│  │  │  │  ├─ Bv9joExh.js
│  │  │  │  ├─ Cd3EfAXl.js
│  │  │  │  ├─ H-vYU0Wy.js
│  │  │  │  ├─ builds
│  │  │  │  │  ├─ latest.json
│  │  │  │  │  └─ meta
│  │  │  │  │     └─ 6d0a62b7-0446-4b45-927b-a110460bbdaa.json
│  │  │  │  ├─ entry.B28mALbR.css
│  │  │  │  ├─ error-404.C-Ezrlz-.css
│  │  │  │  ├─ error-500.DBWf9FGj.css
│  │  │  │  └─ nt9kCC_C.js
│  │  │  ├─ favicon.ico
│  │  │  └─ robots.txt
│  │  └─ server
│  │     ├─ chunks
│  │     │  ├─ _
│  │     │  │  ├─ error-500.mjs
│  │     │  │  └─ error-500.mjs.map
│  │     │  ├─ build
│  │     │  │  ├─ client.precomputed.mjs
│  │     │  │  └─ client.precomputed.mjs.map
│  │     │  ├─ nitro
│  │     │  │  ├─ nitro.mjs
│  │     │  │  └─ nitro.mjs.map
│  │     │  ├─ routes
│  │     │  │  ├─ renderer.mjs
│  │     │  │  └─ renderer.mjs.map
│  │     │  └─ virtual
│  │     │     ├─ _virtual_spa-template.mjs
│  │     │     └─ _virtual_spa-template.mjs.map
│  │     ├─ index.mjs
│  │     ├─ index.mjs.map
│  │     └─ package.json
│  ├─ README.md
│  ├─ app
│  │  ├─ app.vue
│  │  ├─ assets
│  │  │  └─ css
│  │  │     └─ main.css
│  │  ├─ pages
│  │  │  └─ index.vue
│  │  ├─ spa-loading-template.html
│  │  └─ stores
│  ├─ bun.lock
│  ├─ nuxt.config.ts
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  └─ robots.txt
│  └─ tsconfig.json
├─ package.json
└─ scripts
   └─ build-deploy.sh

```