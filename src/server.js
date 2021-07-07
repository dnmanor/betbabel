const {
  getSlipFromBookingCode,
} = require("./collect-slips/get-slip-from-booking-code");

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const PORT = 3000 || process.env.PORT;

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});

app.get("/error", (req, res) => {
  res.sendFile(path.join(__dirname, "public/error.html"));
});

app.post("/", (req, res) => {
  const data = req.body;
  const bookiefrom = `${data.bookiefrom}`;
  const bookieto = `${data.bookieto}`;
  const bookingCode = `${data.bookingcode}`;

  if (bookiefrom === bookieto) {
    console.log("error");
    res.redirect("/error");
  } else {
    console.log("Code Recieved");
    const bookingCode = getSlipFromBookingCode(
      bookingCode,
      bookiefrom,
      bookieto
    );
    res.status(200).send({ result: bookingCode });
  }
});

app.post("/error", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("app started on", PORT);
});
