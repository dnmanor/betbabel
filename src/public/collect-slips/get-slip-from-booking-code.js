const axios = require("axios");
const { getBetwayEvents } = require("./betway");
const { getBetPawaEvents } = require("./betpawa");
const { getSportybetEvents } = require("./sportybet");

async function getSlipFromBookingCode(bookingCode, bookiefrom, bookieTo) {
  switch (bookiefrom) {
    case "betway":
      betway(bookingCode, bookieTo);
      break;
    case "betpawa":
      betpawa(bookingCode, bookieTo);
      break;
    case "sportybet":
      sportybet(bookingCode, bookieTo);
      break;

    default:
      return bookingCode;
      
  }
}

const betway = async (bookingCode, bookieTo) => {
  const eventsData = await getBetwayEvents(bookingCode);
  console.log(eventsData);

  switch (bookieTo) {
    case "sportybet":
      console.log("sporty");
      break;

    case "betpawa":
      console.log("betpawa");
      break;

    default:
      break;
  }
};

const betpawa = async (bookingCode, bookieTo) => {
  const eventData = await getBetPawaEvents(bookingCode);
  console.log(eventData);

  switch (bookieTo) {
    case "betway":
      console.log("betway");
      break;

    case "sportybet":
      console.log("sporty");
      break;

    default:
      break;
  }
};

const sportybet = async (bookingCode, bookieTo) => {
  const eventData = await getSportybetEvents(bookingCode);
  console.log(eventData);

  switch (bookieTo) {
    case "betway":
      console.log("betway");
      break;

    case "betpawa":
      console.log("betpawa");
      break;

    default:
      break;
  }
};

exports.getSlipFromBookingCode = getSlipFromBookingCode;
