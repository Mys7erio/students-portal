import { randomUUID } from 'crypto';
import { i as invalid } from './index2-50115400.js';
import { a as checkLogin, r as registerSession } from './dbManager-cc2b9572.js';
import '@prisma/client';

const actions = {
  default: async (event) => {
    const creds = await event.request.formData();
    const email = creds.get("email");
    const password = creds.get("password");
    console.log(email, password);
    let user = await checkLogin(email, password);
    if (user) {
      let cookie = randomUUID();
      event.cookies.set("SessionID", cookie);
      let context = {
        role: user.Role,
        first_name: user.first_name,
        email: user.email
      };
      await registerSession(cookie, email);
      return { success: true, userInfo: context };
    } else {
      console.log("Login Failed");
      return invalid(400, { incorrect: true });
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 3;
const component = async () => (await import('./_page.svelte-7474ed40.js')).default;
const file = '_app/immutable/components/pages/login/_page.svelte-84f281f6.js';
const imports = ["_app/immutable/components/pages/login/_page.svelte-84f281f6.js","_app/immutable/chunks/index-ded4d6cf.js","_app/immutable/chunks/stores-2b94fd3d.js","_app/immutable/chunks/index-7b5ae4cd.js"];
const stylesheets = ["_app/immutable/assets/_page-21cf7d41.css"];

export { component, file, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=3-67b94d15.js.map
