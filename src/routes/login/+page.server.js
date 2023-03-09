import { randomUUID } from "crypto";
import { invalid, redirect } from "@sveltejs/kit";
import { checkLogin, registerSession } from "$lib/dbManager.js";

// This function Redirects to home if user is already logged in
// export async function load(event) {
//   let SessionID = event.cookies.get("SessionID");
//   if (SessionID && get(LoginStatus).loggedIn) {
//     if (SessionID) {
//     throw redirect(302, "/");
//   }
// }

export const actions = {
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
        email: user.email,
      };
      // console.log(context)

      await registerSession(cookie, email);

      return { success: true, userInfo: context };
    } else {
      console.log("Login Failed");
      return invalid(400, { incorrect: true });
    }
  },
};
