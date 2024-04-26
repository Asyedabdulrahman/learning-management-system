"use client";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "./_components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51P9XW2SIyilJebD1M4F4yYyxQxMY0X5rYLlp8egw6ExyvpSEAI3Z9UnsRin8XeYUtDvnB9BTOWpVY3szmoXpjUsf00xEth89vm"
);

function page() {
  const options = {
    mode: "payment",
    currency: "usd",
    amount: 33,
  };
  return (
    <div>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default page;
