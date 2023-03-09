async function load(event) {
  event.cookies.set("SessionID", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0
  });
  console.log("LOGOUT");
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-cea6ee43.js')).default;
const file = '_app/immutable/components/pages/logout/_page.svelte-b2f4a5fd.js';
const imports = ["_app/immutable/components/pages/logout/_page.svelte-b2f4a5fd.js","_app/immutable/chunks/index-ded4d6cf.js","_app/immutable/chunks/stores-2b94fd3d.js","_app/immutable/chunks/index-7b5ae4cd.js"];
const stylesheets = [];

export { component, file, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=4-c69a70ff.js.map
