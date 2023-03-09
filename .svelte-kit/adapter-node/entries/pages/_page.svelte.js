import { c as create_ssr_component, d as add_attribute, e as escape, b as subscribe, v as validate_component } from "../../chunks/index.js";
import { L as LoginStatus } from "../../chunks/stores.js";
const card_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-19x1pi3.svelte-19x1pi3{border:none;margin-left:8vmin;margin-right:8vmin;margin-top:10vmin;margin-bottom:10vmin}.card.svelte-19x1pi3.svelte-19x1pi3:hover{border:2px solid black}.card-hover-text.svelte-19x1pi3.svelte-19x1pi3{display:none}.card.svelte-19x1pi3:hover .card-hover-text.svelte-19x1pi3{display:block}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { title } = $$props;
  let { desc } = $$props;
  let { href } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css);
  return `<div class="${"card svelte-19x1pi3"}" style="${"width: 18rem;"}"><img class="${"card-img-top"}"${add_attribute("src", icon, 0)} alt="${"Logo"}">
    <div class="${"card-body"}"><h4 class="${"card-title card-hover-text text-center svelte-19x1pi3"}">${escape(title)}</h4>
        <p class="${"card-hover-text text-center svelte-19x1pi3"}">${escape(desc)}</p>
        <a${add_attribute("href", href, 0)} class="${"card-hover-text btn btn-primary svelte-19x1pi3"}">View</a></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $LoginStatus, $$unsubscribe_LoginStatus;
  $$unsubscribe_LoginStatus = subscribe(LoginStatus, (value) => $LoginStatus = value);
  $$unsubscribe_LoginStatus();
  return `<div class="${"container"}"><div class="${"display-1 text-center p-4"}">Home Page</div>
  <div class="${"row"}">${validate_component(Card, "Card").$$render(
    $$result,
    {
      href: "/view/marksheet",
      icon: "/marksheet3.svg",
      title: "View Marksheet",
      desc: "View Marksheet For Current Semester, Previous Semester, Etc"
    },
    {},
    {}
  )}
    ${validate_component(Card, "Card").$$render(
    $$result,
    {
      href: "/view/attendance",
      icon: "/attendance.svg",
      title: "View Attendance",
      desc: "View Your Attendance For This Semester, Month, Week, Etc"
    },
    {},
    {}
  )}
    ${$LoginStatus.loggedIn ? `${$LoginStatus.userInfo.role === "Administrator" ? `${validate_component(Card, "Card").$$render(
    $$result,
    {
      href: "/view/send_mail",
      icon: "/mail.svg",
      title: "Send Emails",
      desc: "Send Emails to Students/ Members of Kristu Jayanti Organisation"
    },
    {},
    {}
  )}` : ``}` : ``}</div></div>`;
});
export {
  Page as default
};
