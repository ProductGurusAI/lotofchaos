// Worker entry: handles /api/* routes, everything else is served from ./public
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/hello") {
      return Response.json({
        message: "Hello from a Cloudflare Worker",
        time: new Date().toISOString(),
        colo: request.cf?.colo ?? null,
      });
    }

    return env.ASSETS.fetch(request);
  },
};
