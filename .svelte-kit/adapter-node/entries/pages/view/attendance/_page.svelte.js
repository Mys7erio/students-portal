import { c as create_ssr_component, e as escape } from "../../../../chunks/index.js";
import "../../../../chunks/dbManager.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-1avxdnb{margin-top:25px;margin-bottom:25px}.card-body.svelte-1avxdnb{height:50vmin;width:30}",
  map: null
};
let total = 100;
let present = 69;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "Shakir" } = $$props;
  let { attendance = present / total * 100 } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.attendance === void 0 && $$bindings.attendance && attendance !== void 0)
    $$bindings.attendance(attendance);
  $$result.css.add(css);
  return `<div class="${"container"}"><div class="${"card svelte-1avxdnb"}"></div>
    <div class="${"card-body svelte-1avxdnb"}"><h1 class="${"lead"}">Name: ${escape(name)}</h1>
        <h1 class="${"lead"}">Attendance: ${escape(attendance)}</h1>
        <div class="${"progress"}"><div class="${"progress-bar bg-success"}" role="${"progressbar"}" style="${"width: " + escape(attendance, true) + "%"}"></div></div></div>
</div>`;
});
export {
  Page as default
};
