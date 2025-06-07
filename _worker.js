export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Serve index.html for the root path
    if (url.pathname === '/') {
      return fetch(new URL('/index.html', request.url));
    }

    // Try to fetch the requested resource
    try {
      return fetch(request);
    } catch (e) {
      // If resource not found, return 404
      return new Response("Not found", { status: 404 });
    }
  }
};