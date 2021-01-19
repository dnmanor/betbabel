const createBetwaySlip = (data) =>{

}


fetch("https://www.betway.com.gh/BookABet/internal/GetBookingCodeAndShare?1607478875252", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
    "content-type": "application/x-www-form-urlencoded",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-newrelic-id": "VQIFUFZQDhADV1ZWAQQAVg==",
    "cookie": "_ga=GA1.3.1061025085.1589384618; _fbp=fb.2.1589384620388.877192618; BTAG=P59600-PR11456-CM41619-TS206610; __cfduid=d20db2b76eccd39acd1d15d1ccef9152f1606162944; selectedSport~00000000-0000-0000-da7a-000000580001~sport=00000000-0000-0000-da7a-000000550001; ASP.NET_SessionId=lqgu0kapkbwjoo5vu2rocnni; __RequestVerificationToken=gSZW7Xuz0SVEXSCE5QGq5ngm9fxTIZfY1FXlO-MZV145AxuDhtvhTU1tIgAOHrfyJLDXmK49kR2hPGWFyfCs2bUxeQw1; OriginalQueryString=uri=https://www.betway.com.gh/bookabet/12732AD1; InCashoutPoller=false; _gid=GA1.3.166763314.1607435940; FilterCount=0; _sp_srt_ses.11cc=*; _sp_srt_id.11cc=65acc27d-88a9-40a9-9a2a-cf09ceb75e8e.1589384623.83.1607477892.1607457979.05017641-1372-4edb-852e-cc24386c6829; ActivateCashoutPolling=false"
  },
  "referrer": "https://www.betway.com.gh/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "outcomeIds=f83d946c-2e35-eb11-80ee-00155d8349db%2C096c3cdb-7938-eb11-80ee-00155d8349db%2C43fd0e91-ee36-eb11-80ee-00155d8349db%2Cc097c108-ef36-eb11-80ee-00155d8349db%2Cd14a39a8-ea34-eb11-80ee-00155d8349db%2Caed62899-7a38-eb11-80ee-00155d8349db&accountId=&isSingleBet=false",
  "method": "POST",
  "mode": "cors"
});


exports.createBetwaySlip = createBetwaySlip
