const axios = require('axios')

const getSportybetEvents = async ( bookingCode ) =>{

    const response = await axios
        .get(
          `https://www.sportybet.com/api/gh/orders/share/${bookingCode}?_t=1606941263738`,
          {
            headers: {
              accept: "*/*",
              "accept-language": "en-GB,en q=0.9,en-US q=0.8",
              clientid: "web",
              "content-type": "application/x-www-form-urlencoded  charset=UTF-8",
              operid: "3",
              platform: "web",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "same-origin",
              "sec-fetch-site": "same-origin",
            },
            referrer: "https://www.sportybet.com/gh/",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: null,
            method: "GET",
            mode: "cors",
            credentials: "include",
          }
        )

    const data = response.data

    return data

}

exports.getSportybetEvents = getSportybetEvents