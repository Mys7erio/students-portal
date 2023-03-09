import Mailjet from 'node-mailjet';

const mailjet = new Mailjet({
  apiKey: "411354f22ac63d6cba382f7364926c11",
  apiSecret: "a98c061c244a9f8844e73f66f0afedb6"
});
function recipientsListBuilder(addresses, classId = "21bcae") {
  let addrs = [];
  addresses.forEach((addr) => addrs.push(
    { "Email": `${classId}${addr}@kristujayanti.com ` }
  ));
  return addrs;
}
function requestBuilder(rollNos, subject, emailBody) {
  const request = mailjet.post("send", { "version": "v3.1" }).request({
    "Messages": [
      {
        "From": {
          "Email": "21bcae35@kristujayanti.com",
          "Name": "Administrator"
        },
        "To": rollNos,
        "Subject": subject,
        "TextPart": emailBody
      }
    ]
  });
  return request;
}
console.log(recipientsListBuilder(["21", "22", "35", "55"]));
const actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    let rollNos = formData.get("rollNos").replace(/\s/g, "");
    let rollNoList = recipientsListBuilder(rollNos.split(","));
    let emailSubject = formData.get("emailSubject");
    let emailBody = formData.get("emailBody");
    const request = requestBuilder(rollNoList, emailSubject, emailBody);
    await request;
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 6;
const component = async () => (await import('./_page.svelte-c4ca7446.js')).default;
const file = '_app/immutable/components/pages/view/send_mail/_page.svelte-68453a0a.js';
const imports = ["_app/immutable/components/pages/view/send_mail/_page.svelte-68453a0a.js","_app/immutable/chunks/index-ded4d6cf.js"];
const stylesheets = [];

export { component, file, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=6-08bd4dd4.js.map
