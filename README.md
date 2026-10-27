# Cloudflare Pages starter

Static site + one Pages Function, ready to deploy to Cloudflare Pages (free plan).

## Structure

```
public/            ← everything in here is deployed as-is
  index.html       → served at /
  about.html       → served at /about  (Pages strips .html automatically)
  404.html         → custom not-found page
  _headers         → security + cache headers
  _redirects       → redirect rules (examples inside)
  assets/          → css / js
functions/
  api/hello.js     → serverless endpoint at /api/hello
wrangler.toml      → config for the Wrangler CLI
```

## Deploy — Option A: Git (recommended)

1. Push this folder to a GitHub or GitLab repo.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo. Build settings:
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: **public**
4. Save and Deploy. You get `https://<project>.pages.dev` in about a minute.
   Every push to `main` redeploys; other branches get preview URLs.

## Deploy — Option B: Direct upload (no Git)

Dashboard → Workers & Pages → Create → Pages → **Upload assets** → drag the `public` folder in.
(Note: Pages Functions only deploy via Git or Wrangler, not via drag-and-drop.)

## Deploy — Option C: Wrangler CLI

```bash
npm install
npx wrangler login
npm run deploy
```

Local preview (includes the function): `npm run dev` → http://localhost:8788

## Adding your own domain later

Pages project → **Custom domains → Set up a custom domain**.
If the domain is registered at Cloudflare it's a one-click DNS record; otherwise add the CNAME they show you. SSL is automatic and free.

## Free tier limits (as of late 2026)

Unlimited bandwidth and sites, 500 builds/month, 100k Function requests/day — plenty for a personal site or portfolio.
