"use server";
import { OpenBilling } from "open-billing";
import { auth } from "~/server/auth";
import { cookies, headers } from "next/headers";
import { HTTPClient } from "open-billing/lib/http";

// export const billing = new OpenBilling({
//   security: {
//     bearer: process.env["OPENBILLING_BEARER"] ?? "",
//     organizationId: process.env["OPENBILLING_ORGANIZATION_ID"] ?? "",
//   },
// });

// export const getBillingInstance = async () => {
//   // const session = await getSession();
//   const session = await auth();
//   console.log(session, "hey boo");
//   // const cookieStore = await cookies();
//   // const accessToken = cookieStore.get("authjs.session-token");
//   // const organization_Id = cookieStore.get("organization_Id");
//   return new OpenBilling({
//     security: {
//       organizationId: "",
//       bearer: "",
//     },
//   });
// };

// export const billing = await getBillingInstance();

export async function getBillingInstance() {
  const cookieStore = await cookies();
  const organization_Id = cookieStore.get("organization_Id")?.value;
  const accessToken = cookieStore.get("authjs.session-token")?.value;

  const billing = new OpenBilling({
    security: {
      organizationId: organization_Id,
      bearer: accessToken,
    },
    serverURL: "https://api.tony.openbilling.org",
  });
  return billing;
}
