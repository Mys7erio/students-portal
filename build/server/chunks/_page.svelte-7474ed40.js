import { c as create_ssr_component, e as escape } from './index-a7bda15d.js';
import { L as LoginStatus } from './stores-ce955870.js';
import './index3-039e29ff.js';
import 'util';
import 'crypto';

const css = {
  code: ".h-custom.svelte-1l1h0of{height:calc(100% - 73px)}@media(max-width: 450px){.h-custom.svelte-1l1h0of{height:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  function setLogin(context) {
    LoginStatus.set({ loggedIn: true, userInfo: context });
  }
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<section class="${"vh-100"}"><div class="${"container-fluid h-custom svelte-1l1h0of"}"><div class="${"row d-flex justify-content-center align-items-center text-center h-100"}"><div class="${"col-md-9 col-lg-6 col-xl-5"}"><img src="${"/kjc logo.png"}" class="${"img-fluid"}" alt="${"Kristu Jayanti College Logo"}">
        <h1 class="${"display-5 py-5"}">Kristu Jayanti Students Portal</h1></div>

      <div class="${"col-md-8 col-lg-6 col-xl-4 offset-xl-1"}">
        <form method="${"POST"}"><div class="${"p-5"}"><h1 class="${"display-1 text-center"}"><b>Sign in</b></h1></div>

          
          <div class="${"form-outline mb-4"}">
            <input name="${"email"}" class="${"form-control form-control-lg"}" placeholder="${"Enter college email address"}"></div>

          
          <div class="${"form-outline mb-3"}"><input type="${"password"}" name="${"password"}" class="${"form-control form-control-lg"}" placeholder="${"Enter password"}"></div>

          ${(form == null ? void 0 : form.incorrect) ? `<p class="${"text-danger"}">Invalid Username or Password</p>` : ``}

          ${(form == null ? void 0 : form.success) ? `${escape(setLogin(form == null ? void 0 : form.userInfo))}` : ``}

          <div class="${"d-flex justify-content-between align-items-center"}">
            <div class="${"form-check mb-0"}"><input class="${"form-check-input me-2"}" type="${"checkbox"}" value="${""}" id="${"form2Example3"}">
              <label class="${"form-check-label"}" for="${"form2Example3"}">Remember me
              </label></div>
            </div>

          <div class="${"text-center text-lg-start mt-4 pt-2"}"><button type="${"submit"}" class="${"btn btn-primary btn-lg"}">Login</button>
            <p class="${"small fw-bold mt-2 pt-1 mb-0"}">Don&#39;t have an account?
              <a href="${"#!"}" class="${"link-danger"}">Register</a></p></div></form></div></div></div>
</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7474ed40.js.map
