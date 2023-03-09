import { randomUUID } from "crypto";
import { i as invalid } from "../../../chunks/index2.js";
import { a as checkLogin, r as registerSession } from "../../../chunks/dbManager.js";
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
export {
  actions
};
