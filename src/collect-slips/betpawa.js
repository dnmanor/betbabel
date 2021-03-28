const axios = require("axios");

async function getBetPawaEvents(bookingCode) {
  const response = await axios.get(
    `https://www.betpawa.com.gh/api/booking-number/${bookingCode}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-GB,en q=0.9,en-US q=0.8",
        devicetype: "web",
        jurid: "8",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        traceid: "192703f8-2fd4-4790-8d36-53a506ddb2e9",
        vuejs: "true",
        cookie:
          "_fbp=fb.2.1604026367685.1211617923  _ym_d=1604026371  _ym_uid=1604026371997886951  tracingId=fc34e41b-b2f5-40a9-8482-bf458e337af7  _ym_isad=2  _ym_visorc_47975018=b",
      },
      referrer: "https://www.betpawa.com.gh/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
    }
  );

  const data = response.data.items;

  const events = data.map((selections) => {
    return selections.eventName;
  });

  return events;
}

exports.getBetPawaEvents = getBetPawaEvents