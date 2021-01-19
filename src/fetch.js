const axios = require('axios');
const { response } = require('express');

function getSlipFromBookingCode(bookingCode, bookiefrom){
  switch (bookiefrom) {
    case 'betway':
      betway(bookingCode)
      break;
    case 'betpawa':
      betpawa(bookingCode)
      break;
    case 'sportybet':
      sportybet(bookingCode)
      break;

    default:
      return bookingCode
      break;
  }
  
  
}

const betway = (bookingCode) => {
  axios.get(`https://www.betway.com.gh/BookABet/internal/GetClientSideBetslipForBookingCode?bookingCode=${bookingCode}&1606832656886`, {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-newrelic-id": "VQIFUFZQDhADV1ZWAQQAVg==",
    "cookie": "_ga=GA1.3.1061025085.1589384618; _fbp=fb.2.1589384620388.877192618; BTAG=P59600-PR11456-CM41619-TS206610; __cfduid=d20db2b76eccd39acd1d15d1ccef9152f1606162944; ASP.NET_SessionId=qsfnwrv41rpctyfbu0xswd3a; selectedSport~00000000-0000-0000-da7a-000000580001~sport=00000000-0000-0000-da7a-000000550001; __RequestVerificationToken=W1ImIBTGy4LmrF50bTaLprckGKZX3HYu1kXBzoG_e_t0mgN4yNoEcZW4ssZnuqd_2GXmiSaw4fePV3Bt6YhXRPJKYB01; InCashoutPoller=false; FilterCount=0; _gid=GA1.3.443574354.1606703196; OriginalQueryString=uri=https://www.betway.com.gh/; _sp_srt_ses.11cc=*; ActivateCashoutPolling=false; _gat_UA-1515961-19=1; _sp_srt_id.11cc=65acc27d-88a9-40a9-9a2a-cf09ceb75e8e.1589384623.77.1606832635.1606830055.4a4d5676-633b-49d8-a447-0390131849f5"
  },
  "referrer": "https://www.betway.com.gh/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then((response) =>{
   const rawData = response.data
   const JSONdata = rawData.split("/").join("")
   const useableData = JSON.parse(JSONdata)
   console.log(useableData)
  //  createBetwaySlip() 
})
}

const betpawa = (bookingCode) => {
  axios.get(`https://www.betpawa.com.gh/api/booking-number/${bookingCode}`, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
      "devicetype": "web",
      "jurid": "8",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "traceid": "192703f8-2fd4-4790-8d36-53a506ddb2e9",
      "vuejs": "true",
      "cookie": "_fbp=fb.2.1604026367685.1211617923; _ym_d=1604026371; _ym_uid=1604026371997886951; tracingId=fc34e41b-b2f5-40a9-8482-bf458e337af7; _ym_isad=2; _ym_visorc_47975018=b"
    },
    "referrer": "https://www.betpawa.com.gh/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors"
  }).then((response) => console.log(response.data))
}

const sportybet = (bookingCode) => {
  axios.get(`https://www.sportybet.com/api/gh/orders/share/${bookingCode}?_t=1606941263738`, {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
      "clientid": "web",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "operid": "3",
      "platform": "web",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "same-origin",
      "sec-fetch-site": "same-origin"
    },
    "referrer": "https://www.sportybet.com/gh/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  }).then((response) => {response.data})
}



exports.getSlipFromBookingCode = getSlipFromBookingCode