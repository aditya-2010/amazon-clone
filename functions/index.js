const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPvWWDSwIxhYUYbkwUrUo64v28FP1E8YRDQJyBIsWV7r8UbzslfRB7kXdvluVcKBXiMv5jbOw7evgqJSO8y1vcB004DM0nBXK"
);

// app config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("Hello Aditya"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment req received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // in subunits
    currency: "inr",
  });

  // 201 means OK - created something
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);
