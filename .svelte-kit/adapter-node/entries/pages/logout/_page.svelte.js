import { c as create_ssr_component } from "../../../chunks/index.js";
import { L as LoginStatus } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  LoginStatus.set({ loggedIn: false });
  return `<br><br><br><br><br><br><br>

<h1 class="${"display-1 text-center"}">Adios ;)</h1>
<br>
<h2 class="${"display-6 text-center"}">(Logging Out...)</h2>`;
});
export {
  Page as default
};
