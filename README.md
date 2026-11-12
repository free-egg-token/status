# Free Egg Token Status

The official (parody) status page for [Free Egg Token](https://github.com/free-egg-token) and its
[free-egg](https://github.com/free-egg-token/free-egg) API gateway.

Every component is operational. None of them exist. Uptime figures are hardcoded, incidents are
invented, and the only real thing here is the build pipeline.

## Stack

- [Nuxt 4](https://nuxt.com) with server-side rendering and static generation
- [@nuxtjs/i18n](https://i18n.nuxtjs.org) for English, Simplified Chinese and Traditional Chinese
- Hand-written CSS — no UI framework, no chart library, no runtime API calls

## Development

```bash
npm install
npm run dev
```

The site is available at `http://localhost:3000`. Locale routes:

| Locale | URL |
| --- | --- |
| English (default) | `/` |
| 简体中文 | `/zh-CN` |
| 繁體中文 | `/zh-TW` |

## Build and deploy

```bash
npm run generate
```

The static site is written to `.output/public`. Upload that directory to any static host
(Cloudflare Pages, GitHub Pages, Vercel, S3, …). No server runtime, environment variables or API
keys are required.

For a Cloudflare Pages project, use `npm run generate` as the build command and
`.output/public` as the output directory.

## Project layout

```
app/
  assets/css/main.css      Design tokens and base styles
  components/              Header, hero, metrics, service groups, models, incidents, footer
  data/status.ts           All hardcoded status fixtures (the only data source)
  layouts/default.vue      Page chrome
  pages/index.vue          Home page and localized metadata
i18n/locales/              en.json, zh-CN.json, zh-TW.json
```

`app/data/status.ts` also fixes the 90-day window (`STATUS_WINDOW_END`) so server and client render
identical bars without hydration mismatches.

## A note on the data

There is no monitoring backend, no health check and no telemetry. The status, uptime bars, model
list and incident history are static fixtures. This is intentional: the page is a parody.

## Disclaimer

All systems are operational. None of them exist. Status page is a parody. Uptime figures are hardcoded. No SLAs, express or implied, are offered or honored.
