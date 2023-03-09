import { c as create_ssr_component } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"vh-100"}"><div class="${"container-fluid h-custom"}"><form class="${"m-5 p-5"}" method="${"POST"}"><div class="${"form-group my-1"}"><label class="${"display-6 my-1"}" for="${"rollNos"}">Send Mail To Roll No(s):</label>
          <input class="${"form-control"}" name="${"rollNos"}" placeholder="${"E: 21, 35, 58"}">
          <small id="${"emailHelp"}" class="${"form-text text-muted"}">Enter comma seperated roll numbers</small></div>

        <div class="${"form-group"}"><label class="${"display-6 py-3"}" for="${"emailSubject"}">Enter Email Subject</label>
          <input class="${"form-control"}" name="${"emailSubject"}" placeholder="${"Ex: Attendance Shortage Notice \u26A0\uFE0F"}"></div>

        <div class="${"form-group my-3"}"><label class="${"display-6 py-3"}" for="${"emailBody"}">Enter Email Body</label>
            <textarea class="${"form-control"}" name="${"emailBody"}">${" "}</textarea></div>
        <button type="${"submit"}" class="${"btn btn-primary my-5"}">Submit</button></form></div></section>


`;
});
export {
  Page as default
};
