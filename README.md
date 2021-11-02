<h1 style="font-size: 36px">Integration Guidelines</h1>
<h2 style="font-size: 28px">Overview</h2>
<div style="font-size: 16px">
aamarPay Payment Gateway enables Merchants to receive money from their customers by temporarily redirecting them to www.aamarpay.com. The gateway is connecting multiple payment terminal including card system, mobile financial
system, local and International wallet. After the payment is complete, the customer is returned to the merchant's site and seconds later the Merchant receives notification
about the payment along with the details of the transaction. This document is intended to be utilized by technical personnel supporting the online Merchant's
website. Working knowledge of HTML forms or cURL is required. You will probably require test accounts for which you need to open accounts via contact with aamarPay.com or already provided to you.
</div>

<br/>
<h2 style="font-size: 28px">API Operations</h2>
<div style="font-size: 16px">
REST APIs are supported in two environments. Use the Sandbox environment for testing purposes, then move to the live environment for production processing. When testing, generate an order url with your test credentials to make calls to the Sandbox URIs. When you’re set to go live, use the live credentials assigned to your new signature key to generate a live order url to be used with the live URIs.
</div>
<br>
<div style="font-size: 16px">
For <b>Testing Purpose</b>, use following <i>Store ID</i> and <i>Signature Key</i> :
<br/>
<br/>
store_id: "aamarpaytest",
<br/>
signature_key: "dbb74894e82415a2f7ff0ec3a97e4183"
<br/>
<br />
And hit the API: <i style="margin-left: 10px; margin-right: 10px">https://sandbox.aamarpay.com/jsonpost.php</i> with your json data.
</div>
<br />
<div style="font-size: 16px">
For <b>Production</b>, use your <i>Store ID</i> and <i>Signature Key</i> (<b>provided by aamarPay</b>) :
<br/>
<br/>
store_id: "YOUR STORE ID",
<br/>
signature_key: "YOUR SIGNATURE KEY"
<br/>
<br />
And hit the API: <i style="margin-left: 10px; margin-right: 10px">https://secure.aamarpay.com/jsonpost.php</i> with your json data.
</div>

<div style="margin-top: 15px; font-size: 28px; margin-bottom: 10px">
Parameters
</div>

<table style="display: table">
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Required</th>
<th>Example</th>
<tr>
</thead>
<tbody>
<tr>
<td>
<b>store_id</b>
</td>
<td>
Store ID will
be provided by
aamarpay
</td>
<td>
Yes
</td>
<td>
aamarpaytest
</td>
</tr>
<tr>
<td>
<b>signature_key</b>
</td>
<td>
Signature key
will be
provided by
aamarpay
</td>
<td>
Yes
</td>
<td>
dbb74894e82415a2f7ff0ec3a97e4183
</td>
</tr>
<tr>
<td>
<b>cus_name</b>
</td>
<td>
Client's name
</td>
<td>
Yes
</td>
<td>
Imtiaz Akil
</td>
</tr>
<tr>
<td>
<b>cus_email</b>
</td>
<td>
Client's email address
</td>
<td>
Yes
</td>
<td>
imtiaz.akil@softbd.com
</td>
</tr>
<tr>
<td>
<b>cus_phone</b>
</td>
<td>
Client's phone number
</td>
<td>
Yes
</td>
<td>
01870762472
</td>
</tr>
<tr>
<td>
<b>cus_add1</b>
</td>
<td>
Client's primary address
</td>
<td>
Yes
</td>
<td>
Dhaka
</td>
</tr>
<tr>
<td>
<b>cus_add2</b>
</td>
<td>
Client's secondary
</td>
<td>
Yes
</td>
<td>
Dhaka
</td>
</tr>
<tr>
<td>
<b>cus_city</b>
</td>
<td>
Client's city name
</td>
<td>
Yes
</td>
<td>
Dhaka
</td>
</tr>
<tr>
<td>
<b>cus_country</b>
</td>
<td>
Client's country name
</td>
<td>
Yes
</td>
<td>
Bangladesh
</td>
</tr>
<tr>
<td>
<b>amount</b>
</td>
<td>
Amount
</td>
<td>
Yes
</td>
<td>
10.00
</td>
</tr>
<tr>
<td>
<b>tran_id</b>
</td>
<td>
Unique
transaction
ID from
merchant
end
</td>
<td>
Yes
</td>
<td>
abCd422DedfE
</td>
</tr>
<tr>
<td>
<b>currency</b>
</td>
<td>
Currency
</td>
<td>
Yes
</td>
<td>
BDT / USD
</td>
</tr>
<tr>
<td>
<b>success_url</b>
</td>
<td>
Your
success
page link
</td>
<td>
Yes
</td>
<td>
https://example.com/success.php
</td>
</tr>
<tr>
<td>
<b>fail_url</b>
</td>
<td>
Your
fail
page link
</td>
<td>
Yes
</td>
<td>
https://example.com/fail.php
</td>
</tr>
<tr>
<td>
<b>cancel_url</b>
</td>
<td>
Your
cancel
page link
</td>
<td>
Yes
</td>
<td>
https://example.com/checkout.php
</td>
</tr>
<tr>
<td>
<b>desc</b>
</td>
<td>
Payment description
</td>
<td>
Yes
</td>
<td>
T-Shirt
</td>
</tr>
<tr>
<td>
<b>opt_a</b>
</td>
<td>
Optional
Parameter
</td>
<td>
No
</td>
<td>
Test payment 1
</td>
</tr>
<tr>
<td>
<b>opt_b</b>
</td>
<td>
Optional
Parameter
</td>
<td>
No
</td>
<td>
Test payment 2
</td>
</tr>
<tr>
<td>
<b>opt_C</b>
</td>
<td>
Optional
Parameter
</td>
<td>
No
</td>
<td>
Test payment 3
</td>
</tr>
<tr>
<td>
<b>type</b>
</td>
<td>
To pass json data
</td>
<td>
Yes
</td>
<td>
"json"
</td>
</tr>
</tbody>
</table>
<div style="font-size: 28px; margin-top: 15px">
Examples
</div>
<div>
<div style="font-size: 20px; margin-top: 10px">
In success request :
<br/>
</div>
<div style="font-size: 16px">
request body :
<br/>
{
  <br/>
  <label style="margin-left: 25px">store_id:</label>
  <label style="margin-left: 15px">"aamarpaytest",</label>
  <br/>
  <label style="margin-left: 25px">signature_key:</label>
  <label style="margin-left: 15px">"dbb74894e82415a2f7ff0ec3a97e4183",</label>
  <br/>
  <label style="margin-left: 25px">cus_name:</label>
  <label style="margin-left: 15px">"Imtiaz Akil",</label>
  <br/>
  <label style="margin-left: 25px">cus_email:</label>
  <label style="margin-left: 15px">"imtiaz.akil@softbd.com",</label>
  <br/>
  <label style="margin-left: 25px">cus_phone:</label>
  <label style="margin-left: 15px">"01870762472",</label>
  <br/>
  <label style="margin-left: 25px">cus_add1:</label>
  <label style="margin-left: 15px">"53, Gausul Azam Road, Sector-14, Dhaka, Bangladesh",</label>
  <br/>
  <label style="margin-left: 25px">cus_add2:</label>
  <label style="margin-left: 15px">"Dhaka",</label>
  <br/>
  <label style="margin-left: 25px">cus_city:</label>
  <label style="margin-left: 15px">"Dhaka",</label>
  <br/>
  <label style="margin-left: 25px">cus_country:</label>
  <label style="margin-left: 15px">"Bangladesh",</label>
  <br/>
  <label style="margin-left: 25px">amount:</label>
  <label style="margin-left: 15px">"10.00",</label>
  <br/>
  <label style="margin-left: 25px">tran_id:</label>
  <label style="margin-left: 15px">"14YToischo",</label>
  <br/>
  <label style="margin-left: 25px">currency:</label>
  <label style="margin-left: 15px">"BDT",</label>
  <br/>
  <label style="margin-left: 25px">success_url:</label>
  <label style="margin-left: 15px">"https://example.com/success.php",</label>
  <br/>
  <label style="margin-left: 25px">fail_url:</label>
  <label style="margin-left: 15px">"https://example.com/fail.php",</label>
  <br/>
  <label style="margin-left: 25px">cancel_url:</label>
  <label style="margin-left: 15px">"https://example.com/cancel.php",</label>
  <br/>
  <label style="margin-left: 25px">desc:</label>
  <label style="margin-left: 15px">"Lend Money",</label>
  <br/>
  <label style="margin-left: 25px">type:</label>
  <label style="margin-left: 15px">"json"</label>
  <br/>
}
<br/>
<div style="margin-top: 15px">response body :</div>
{
  <br/>
  <label style="margin-left: 25px">result:</label>
  <label style="margin-left: 15px">"true",</label>
  <br/>
  <label style="margin-left: 25px">payment_url:</label>
  <label style="margin-left: 15px">"https://sandbox.aamarpay.com/paynow.php?track=AAM1604476085103491"</label>
  <br/>
}
</div>
</div>
<div style="font-size: 16px; margin-top: 15px">
When customer redirect with payment URL then customer will get the
 payment methods.
</div>
<div style="font-size: 16px; margin-top: 15px">
<label style="font-weight: bold">NOTE: </label> <b>For sandbox only bKash payment method is available, when you
initiate payment with live you will get all payment method.</b>
</div>

<div style="margin-top: 15px; font-size: 16px">
After successful payment client will redirect your success page which you are
already passing in our payment gateway as success_url and aamarPay will give
you all data as POST method in your success_url
</div>
<div style="font-size: 16px; margin-top: 15px">
All return variable given below :
<br />
{
  <br/>
  <label style="margin-left: 25px">pg_service_charge_bdt:</label>
  <label style="margin-left: 15px">"0.21",</label>
  <br/>
  <label style="margin-left: 25px">pg_service_charge_usd:</label>
  <label style="margin-left: 15px">"Not-Available",</label>
  <br/>
  <label style="margin-left: 25px">pg_card_bank_name:</label>
  <label style="margin-left: 15px">"",</label>
  <br/>
  <label style="margin-left: 25px">pg_card_bank_country:</label>
  <label style="margin-left: 15px">"",</label>
  <br/>
  <label style="margin-left: 25px">card_number::</label>
  <label style="margin-left: 15px">"01826323538",</label>
  <br/>
  <label style="margin-left: 25px">card_holder:</label>
  <label style="margin-left: 15px">"",</label>
  <br/>
  <label style="margin-left: 25px">cus_phone:</label>
  <label style="margin-left: 15px">"01870762472",</label>
  <br/>
  <label style="margin-left: 25px">desc:</label>
  <label style="margin-left: 15px">"",</label>
  <br/>
  <label style="margin-left: 25px">success_url:</label>
  <label style="margin-left: 15px">"http://localhost/aamarpay/callback/success.php",</label>
  <br/>
  <label style="margin-left: 25px">fail_url:</label>
  <label style="margin-left: 15px">"https://example.com/fail",</label>
  <br/>
  <label style="margin-left: 25px">cus_name:</label>
  <label style="margin-left: 15px">"Imtiaz Akil",</label>
  <br/>
  <label style="margin-left: 25px">cus_email:</label>
  <label style="margin-left: 15px">"imtiaz@softbd.com",</label>
  <br/>
  <label style="margin-left: 25px">currency_merchant:</label>
  <label style="margin-left: 15px">"BDT",</label>
  <br/>
  <label style="margin-left: 25px">convertion_rate:</label>
  <label style="margin-left: 15px">"",</label>
  <br/>
  <label style="margin-left: 25px">ip_address:</label>
  <label style="margin-left: 15px">"103.228.202.73",</label>
  <br/>
  <label style="margin-left: 25px">other_currency:</label>
  <label style="margin-left: 15px">"10.00",</label>
  <br/>
  <label style="margin-left: 25px">pay_status:</label>
  <label style="margin-left: 15px">"Successful",</label>
  <br/>
  <label style="margin-left: 25px">pg_txnid:</label>
  <label style="margin-left: 15px">"AAM1604470136103451",</label>
  <br/>
  <label style="margin-left: 25px">epw_txnid:</label>
  <label style="margin-left: 15px">"AAM1604470136103451",</label>
  <br/>
  <label style="margin-left: 25px">mer_txnid:</label>
  <label style="margin-left: 15px">"asdkfljaw34543",</label>
  <br/>
  <label style="margin-left: 25px">store_id:</label>
  <label style="margin-left: 15px">"aamarpaytest",</label>
  <br/>
  <label style="margin-left: 25px">merchant_id:</label>
  <label style="margin-left: 15px">"aamarpaytest",</label>
  <br/>
  <label style="margin-left: 25px">currency:</label>
  <label style="margin-left: 15px">"BDT",</label>
  <br/>
  <label style="margin-left: 25px">store_amount:</label>
  <label style="margin-left: 15px">"9.79",</label>
  <br/>
  <label style="margin-left: 25px">pay_time:</label>
  <label style="margin-left: 15px">"2020-11-04 12:09:15",</label>
  <br/>
  <label style="margin-left: 25px">amount:</label>
  <label style="margin-left: 15px">"10.00",</label>
  <br/>
  <label style="margin-left: 25px">bank_txn:</label>
  <label style="margin-left: 15px">"6ED4FIJ1G0",</label>
  <br/>
  <label style="margin-left: 25px">card_type:</label>
  <label style="margin-left: 15px">"bKash-bKash",</label>
  <br/>
  <label style="margin-left: 25px">pg_card_risklevel:</label>
  <label style="margin-left: 15px">"",</label>
  <br/>
  <label style="margin-left: 25px">pg_error_code_details:</label>
  <label style="margin-left: 15px">"true",</label>
  <br/>
  <label style="margin-left: 25px">opt_a:</label>
  <label style="margin-left: 15px">"",</label>
  <br/>
  <label style="margin-left: 25px">opt_b:</label>
  <label style="margin-left: 15px">"",</label>
  <br/>
  <label style="margin-left: 25px">opt_c:</label>
  <label style="margin-left: 15px">"",</label>
  <br/>
}
</div>

<div style="font-size: 16px; margin-top: 10px">
Same data you will be get as a POST method in your fail_url when the transaction
is failed.
</div>
<div style="font-size: 16px; margin-top: 10px; font-weight: bold">
Note: We do not submit any data in cancel_url, it will be your product page link or
your home page link.
</div>
<div style="font-size: 16px; margin-top: 10px;">
If you have any query you can contact with us at <i style="color: blue">support@aamarpay.com</i>
<br/>
For integration query you can email us at <i style="color: blue">integration@aamarpay.com</i>
</div>