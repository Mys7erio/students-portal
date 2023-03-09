import { r as redirect } from "../../chunks/index2.js";
import { c as checkSession } from "../../chunks/dbManager.js";
import { L as LoginStatus } from "../../chunks/stores.js";
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
export {
  load
};
