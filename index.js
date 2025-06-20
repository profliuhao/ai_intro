addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname
  
  if (path === "/" || path === "") {
    return fetch(new URL("/index.html", request.url))
  }
  
  return fetch(request)
}
