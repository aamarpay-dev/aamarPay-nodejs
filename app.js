const axios = require("axios");

const formData = {
  store_id: "aamarpaytest",
  signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
  cus_name: "Iori",
  cus_email: "cus@cus.com",
  cus_phone: "01711482036",
  amount: "1",
  tran_id: "123654786336545",
  currency: "BDT",
  desc: "Test Desc",
  success_url: "http://localhost/aamarpay/callback",
  fail_url: "http://localhost/aamarpay/callback",
  cancel_url: "https://example.com",
  type: "json"
}

const TEST_STORE_ID = "aamarpaytest";
const TEST_SIGNATURE_KEY = "dbb74894e82415a2f7ff0ec3a97e4183";

const SANDBOX_PAYMENT_URL = "https://sandbox.aamarpay.com/jsonpost.php";
const SECURE_PAYMENT_URL = "https://secure.aamarpay.com/jsonpost.php";

const aamarPayPayment = async (formData) => {
  try {
    const PAYMENT_URL = (formData.store_id === TEST_STORE_ID && formData.signature_key === TEST_SIGNATURE_KEY) ? SANDBOX_PAYMENT_URL : SECURE_PAYMENT_URL;
    const { data } = await axios.post(PAYMENT_URL, formData);
    return data;
  }
  catch (error) {
    // console.log(error);
  }
}

module.exports = {
  aamarPayPayment
}