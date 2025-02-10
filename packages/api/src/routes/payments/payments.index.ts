/**
 * @internal this fn shouldnt be exposed in the sdk as of yet
 * it is responsible for charging the end customer money
 */

import { db } from "~/middleware/with-db";
import { DateTime } from "luxon";

export async function chargeMomo(checkout_id: string) {
  const checkout = await db.checkouts.findUnique({
    where: {
      id: checkout_id,
    },
    include: {
      customer: {
        select: {
          email: true,
        },
      },
    },
  });

  // check if the checkout session is valid, checkout session should be completed within 12 hours
  if (
    DateTime.fromISO(checkout?.created_at.toISOString()!).plus({ hours: 12 }) <
    DateTime.now()
  ) {
    throw new Error("Checkout session has expired");
  }

  // should complete the payment based off the configured payment provider

  const params = JSON.stringify({
    email: "customer@email.com",
    amount: "10000",
    metadata: {
      custom_fields: [
        {
          value: "makurdi",
          display_name: "Donation for",
          variable_name: "donation_for",
        },
      ],
    },
    mobile_money: {
      phone: "",
      provider: "",
    },
    // bank: {
    //   code: "057",
    //   account_number: "0000000000",
    // },
  });

  const options = {
    hostname: "api.paystack.co",
    port: 443,
    path: "/charge",
    method: "POST",
    headers: {
      Authorization: "Bearer SECRET_KEY",
      "Content-Type": "application/json",
    },
  };

  const res = await fetch("https://api.paystack.co/charge", {
    method: "POST",
    headers: {
      Authorization: "Bearer SECRET_KEY",
      "Content-Type": "application/json",
    },
    body: params,
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  console.log(data);
}
