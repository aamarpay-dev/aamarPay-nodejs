const express = require("express");
const axios = require("axios");
require("colors");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  res.render("index");
});

app.post("/payment", async (req, res, next) => {
  const { cus_email, cus_name, cus_phone, amount, desc, currency } = req.body;
  //Fill formData with your own data
  const formData = {
    cus_name,
    cus_email,
    cus_phone,
    amount,
    tran_id: uuid(),
    signature_key: "28c78bb1f45112f5d40b956fe104645100",
    store_id: "aamarpay",
    currency,
    desc,
    cus_add1: "53, Gausul Azam Road, Sector-14, Dhaka, Bangladesh",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_country: "Bangladesh",
    success_url: "http://localhost:3900/callback",
    fail_url: "http://localhost:3900/callback",
    cancel_url: "http://localhost:3900/callback",
    type: "json", //This is must required for JSON request
  };
  const { data } = await axios.post(
    "https://secure.aamarpay.com/jsonpost.php",
    formData
  );
  if (data.result !== "true") {
    let errorMessage = "";
    for (let key in data) {
      errorMessage += data[key] + ". ";
    }
    return res.render("error", {
      title: "Error",
      errorMessage,
    });
  }
  res.status(301).redirect(data.payment_url);
});

app.post("/callback", async (req, res, next) => {
  // Callback data
  // console.log(req.body);
  const {
    pay_status,
    cus_name,
    cus_phone,
    cus_email,
    currency,
    pay_time,
    amount,
  } = req.body;
  res.render("callback", {
    title: "Payment Status",
    pay_status,
    cus_name,
    cus_phone,
    cus_email,
    currency,
    pay_time,
    amount,
  });
});

const port = 3900;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`.green.bold);
});
