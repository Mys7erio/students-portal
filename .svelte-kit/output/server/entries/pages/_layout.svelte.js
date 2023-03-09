import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../chunks/index.js";
import { L as LoginStatus } from "../../chunks/stores.js";
const Greeting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $LoginStatus, $$unsubscribe_LoginStatus;
  $$unsubscribe_LoginStatus = subscribe(LoginStatus, (value) => $LoginStatus = value);
  $$unsubscribe_LoginStatus();
  return `${$LoginStatus.loggedIn ? `<h1 class="${"display-3"}">${escape($LoginStatus.userInfo.first_name)} (${escape($LoginStatus.userInfo.role)})</h1>` : `<h1 class="${"display-3"}">You are logged out</h1>`}`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $LoginStatus, $$unsubscribe_LoginStatus;
  $$unsubscribe_LoginStatus = subscribe(LoginStatus, (value) => $LoginStatus = value);
  $$unsubscribe_LoginStatus();
  return `
<nav class="${"navbar navbar-expand-lg navbar-light bg-light"}">
    <div class="${"container"}">
      <a class="${"navbar-brand"}" href="${"/"}"><img src="${"/kjc logo.png"}" height="${"75px"}" alt="${"KJC Logo"}" loading="${"lazy"}" style="${"margin-top: -1px;"}"></a>
  
      
      <button class="${"navbar-toggler"}" type="${"button"}" data-mdb-toggle="${"collapse"}" data-mdb-target="${"#navbarButtonsExample"}" aria-controls="${"navbarButtonsExample"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}"><i class="${"fas fa-bars"}"></i></button>
  
      
      <div class="${"collapse navbar-collapse"}" id="${"navbarButtonsExample"}">
        <ul class="${"navbar-nav me-auto mb-2 mb-lg-0"}"><li class="${"nav-item"}">${validate_component(Greeting, "Greeting").$$render($$result, {}, {}, {})}</li></ul>
        
  
        <div class="${"d-flex align-items-center"}">
          <a class="${"btn btn-primary me-3"}" href="${"/"}">Home
          </a>
          ${$LoginStatus.loggedIn ? `<a class="${"btn btn-primary me-3"}" href="${"/logout"}">Logout
            </a>` : ``}
          </div></div>
      </div>
    </nav>
  `;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}


${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
