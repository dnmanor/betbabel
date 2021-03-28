const axios = require("axios");

const getBetwayEvents = async (bookingCode) => {

  const response = await axios
    .get(
      `https://www.betway.com.gh/BookABet/internal/GetClientSideBetslipForBookingCode?bookingCode=${bookingCode}&1606832656886`,
      {
        headers: {
          accept: "*/*",
          "accept-language": "en-GB,en q=0.9,en-US q=0.8",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-newrelic-id": "VQIFUFZQDhADV1ZWAQQAVg==",
          cookie:
            "_ga=GA1.3.1061025085.1589384618  _fbp=fb.2.1589384620388.877192618  BTAG=P59600-PR11456-CM41619-TS206610  __cfduid=d20db2b76eccd39acd1d15d1ccef9152f1606162944  ASP.NET_SessionId=qsfnwrv41rpctyfbu0xswd3a  selectedSport~00000000-0000-0000-da7a-000000580001~sport=00000000-0000-0000-da7a-000000550001  __RequestVerificationToken=W1ImIBTGy4LmrF50bTaLprckGKZX3HYu1kXBzoG_e_t0mgN4yNoEcZW4ssZnuqd_2GXmiSaw4fePV3Bt6YhXRPJKYB01  InCashoutPoller=false  FilterCount=0  _gid=GA1.3.443574354.1606703196  OriginalQueryString=uri=https://www.betway.com.gh/  _sp_srt_ses.11cc=*  ActivateCashoutPolling=false  _gat_UA-1515961-19=1  _sp_srt_id.11cc=65acc27d-88a9-40a9-9a2a-cf09ceb75e8e.1589384623.77.1606832635.1606830055.4a4d5676-633b-49d8-a447-0390131849f5",
        },
        referrer: "https://www.betway.com.gh/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
      }
    )

  
  const rawData = response.data;

  //this does the clean up work even better
  const JSONdata = rawData.split("/").join("");
  const useableData = JSON.parse(JSONdata);
  const data = useableData.Betslip

  const events = data.map((selections) => {
    return selections.EventTitle;
  });


  return events

  
};

exports.getBetwayEvents = getBetwayEvents
