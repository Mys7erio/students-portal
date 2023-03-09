async function load(event) {
  event.cookies.set("SessionID", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0
  });
  console.log("LOGOUT");
}
export {
  load
};
