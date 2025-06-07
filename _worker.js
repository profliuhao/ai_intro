export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Serve index.html for root path
    if (url.pathname === '/') {
      return fetch(new URL('/index.html', request.url));
    }

    // Otherwise, serve the requested file
    return fetch(request);
  }
};