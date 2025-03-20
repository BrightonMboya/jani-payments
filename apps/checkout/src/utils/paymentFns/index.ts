/* 
This is for charging the end customer using Azam Pay as the payment provider

*/

import { z } from "zod";

const chargingPhoneSchema = z.object({
  checkout_Id: z.string(),
  accountNumber: z.string(),
  amount: z.string(),
  currency: z.string(),
  provider: z.enum(["Airtel", "Tigo", "HaloPesa", "AzamPesa", "Mpesa"]),
});

type IChargePhoneSchema = z.infer<typeof chargingPhoneSchema>;

export async function ChargeAzamPay({
  amount,
  accountNumber,
  checkout_Id,
  provider,
  currency,
}: IChargePhoneSchema) {
    // generate the token first
    const token = await fetch(
      "https://authenticator-sandbox.azampay.co.tz/AppRegistration/GenerateToken",
      {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            appName: "",
            clientId: "",
            clientSecret: ""
        })
      }
    );


  const res = await fetch(
    "https://sandbox.azampay.co.tz/azampay/mno/checkout",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accountNumber: accountNumber,
        amount: amount,
        currency: currency,
        provider: provider,
        externalId: checkout_Id,
      }),
    }
  );

  return res;
}
