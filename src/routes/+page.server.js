import { redirect } from "@sveltejs/kit";
import { checkSession } from "$lib/dbManager";
import { LoginStatus } from "$lib/stores";

export async function load(event) {
  let SessionID = event.cookies.get("SessionID");
  if (!SessionID) {
    LoginStatus.set({ loggedIn: false });
    throw redirect(302, "/login");
  }
  let sessionValid = await checkSession(SessionID);
  // console.log(SessionID, sessionValid)

  if (!sessionValid) {
    console.log("Invalid Session: " + SessionID);
    event.cookies.delete("SessionID");
    LoginStatus.set({ loggedIn: false });
    throw redirect(302, "/login");
  }
}
