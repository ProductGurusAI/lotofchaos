# Lot of Chaos — lotofchaos.xyz

A parody parking-lot browser game. Deployed as a Cloudflare Worker with static assets (free plan).

The game is `public/index.html` (self-contained) plus recorded NPC voice clips in `public/voices/`.

## Structure

```
public/            ← everything in here is deployed as-is
  index.html       → the game, served at /
  voices/          → NPC voice clips + manifest.json
  404.html         → custom not-found page
  _headers         → security + cache headers
  _redirects       → redirect rules (examples inside)
src/index.js       → Worker: handles /api/hello, serves public/ for everything else
wrangler.toml      → config for the Wrangler CLI
```

## Deploy — Option A: Git (recommended)

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → **Workers & Pages → Create → Workers → Import a repository**.
3. Pick the repo. Build command: *(empty)*. Deploy command: `npx wrangler deploy`.
4. Save and Deploy. You get `https://<name>.<account>.workers.dev` in about a minute.
   Every push to `main` redeploys.

## Deploy — Option B: Wrangler CLI

```bash
npm install
npx wrangler login
npm run deploy
```

Local preview: `npm run dev` → http://localhost:8787

## Adding your own domain later

Worker → **Settings → Domains & Routes → Add → Custom domain**.
If the domain is registered at Cloudflare it's a one-click DNS record; otherwise add the CNAME they show you. SSL is automatic and free.

## Free tier limits (as of late 2026)

Static asset requests are free and unlimited; 100k Worker requests/day — plenty for a personal site or portfolio.
