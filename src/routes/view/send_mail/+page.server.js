import { requestBuilder, recipientsListBuilder } from "$lib/mailjetClient.js";

export const actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    let rollNos = formData.get("rollNos").replace(/\s/g, "");
    let rollNoList = recipientsListBuilder(rollNos.split(","));

    let emailSubject = formData.get("emailSubject");
    let emailBody = formData.get("emailBody");

    const request = requestBuilder(rollNoList, emailSubject, emailBody);
    await request;
  },
};
