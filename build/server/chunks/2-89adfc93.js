import { r as redirect } from './index2-50115400.js';
import { c as checkSession } from './dbManager-cc2b9572.js';
import { L as LoginStatus } from './stores-ce955870.js';
import '@prisma/client';
import './index3-039e29ff.js';
import './index-a7bda15d.js';
import 'util';
import 'crypto';

async function load(event) {
  let SessionID = event.cookies.get("SessionID");
  if (!SessionID) {
    LoginStatus.set({ loggedIn: false });
    throw redirect(302, "/login");
  }
  let sessionValid = await checkSession(SessionID);
  if (!sessionValid) {
    console.log("Invalid Session: " + SessionID);
    event.cookies.delete("SessionID");
    LoginStatus.set({ loggedIn: false });
    throw redirect(302, "/login");
  }
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_page.svelte-3cd39f05.js')).default;
const file = '_app/immutable/components/pages/_page.svelte-31423f25.js';
const imports = ["_app/immutable/components/pages/_page.svelte-31423f25.js","_app/immutable/chunks/index-ded4d6cf.js","_app/immutable/chunks/stores-2b94fd3d.js","_app/immutable/chunks/index-7b5ae4cd.js"];
const stylesheets = ["_app/immutable/assets/_page-5a4466d4.css"];

export { component, file, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=2-89adfc93.js.map
