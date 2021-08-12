/// <reference path="./deployctl.d.ts" />

addEventListener("fetch", (event: FetchEvent) => {
  const response = new Response(JSON.stringify([
{name: 'name'},
{name: 'name1'},
{name: 'name2'},
{name: 'name3'}
]), {
    headers: { "content-type": "application/json" },
  });
  event.respondWith(response);
});
