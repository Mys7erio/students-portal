import Mailjet from "node-mailjet";
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
export {
  actions
};
