import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_API_SECRET,
});


export function recipientsListBuilder(addresses, classId="21BCAD"){ // classId might need changes
  let addrs = [];
  addresses.forEach((addr) => addrs.push(
    {"Email": `${classId}${addr}@organisation.com `} // Might need changes
  ))
  return addrs
}

export function requestBuilder(rollNos, subject, emailBody){
  const request = mailjet
  .post("send", {'version': 'v3.1'})
  .request({
    "Messages":[
      {
        "From": {
          "Email": "REDACTED", // Changes needed
          "Name": "Administrator"
        },
        "To": rollNos,
        "Subject": subject,
        "TextPart": emailBody
      }
    ]
  })
  return request
}

// request
//   .then((result) => {
//     console.log(result.body)
//     // result.body.Messages.To.forEach((addr) => console.log(addr))
//     console.log(result.body)
//     console.log(result.body.Messages)
//   })
//   .catch((err) => {
//     console.log(err.statusCode)
//   })


console.log(recipientsListBuilder(["21", "22",  "35", "55"]))