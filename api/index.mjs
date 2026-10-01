let serverPromise;

export default async function handler(request, response) {
  serverPromise ??= import('../dist/trailsoft-landing/server/server.mjs');
  const { app } = await serverPromise;
  return app(request, response);
}
