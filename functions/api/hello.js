// Pages Function: served at /api/hello
// Docs: https://developers.cloudflare.com/pages/functions/
export async function onRequestGet(context) {
  return Response.json({
    message: "Hello from a Cloudflare Pages Function",
    time: new Date().toISOString(),
    colo: context.request.cf?.colo ?? null,
  });
}
