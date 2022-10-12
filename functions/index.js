const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LYpbOCX5IENONQwZaaf5aj6x6dUpQQTMgOllX7eLMtgpqjlRouVfRSGKLl4kLobRyHY2uDfnH3eF9BZbYNqO1ol00zEY1mwfh"
);

const app = express();

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);