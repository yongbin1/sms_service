import "dotenv/config";

export const send_message = (nickname, phone_number) => {
  const user_phone_number = phone_number;
  const user_nickname = nickname;

  const finErrCode = 404;
  const axios = require("axios");
  const CryptoJS = require("crypto-js");
  const date = Date.now().toString();

  const serviceId = process.env.SENS_SERVICE_ID;
  const secretKey = process.env.SENS_SECRET_KEY;
  const accessKey = process.env.SENS_ACCESS_KEY;
  const my_number = process.env.SENS_MYNUM;

  const method = "POST";
  const space = " ";
  const newLine = "\n";
  const url = `https://sens.apigw.ntruss.com/sms/v2/services/${serviceId}/messages`;
  const url2 = `/sms/v2/services/${serviceId}/messages`;

  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
  hmac.update(method);
  hmac.update(space);
  hmac.update(url2);
  hmac.update(newLine);
  hmac.update(date);
  hmac.update(newLine);
  hmac.update(accessKey);
  const hash = hmac.finalize();
  const signature = hash.toString(CryptoJS.enc.Base64);

  axios({
    type: "MMS",
    contentType: "AD",

    method: method,
    url: url,
    headers: {
      "Contenc-type": "application/json; charset=utf-8",
      "x-ncp-iam-access-key": accessKey,
      "x-ncp-apigw-timestamp": date,
      "x-ncp-apigw-signature-v2": signature,
    },
    data: {
      type: "SMS",
      countryCode: "82",
      from: my_number,
      content: `${user_nickname}`,
      messages: [{ to: `${user_phone_number}` }],
    },
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return finErrCode;
};
