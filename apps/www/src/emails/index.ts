import { render } from "@react-email/render";
import { Client } from "postmark";
import { JSXElementConstructor, ReactElement } from "react";

export const client = process.env.POSTMARK_API_KEY
  ? new Client(process.env.POSTMARK_API_KEY)
  : null;

export const sendEmail = async ({
  email,
  subject,
  from,
  bcc,
  text,
  react,
  marketing,
}: {
  email: string;
  subject: string;
  from?: string;
  bcc?: string;
  text?: string;
  react?: ReactElement<any, string | JSXElementConstructor<any>>;
  marketing?: boolean;
}) => {
  // if (process.env.NODE_ENV === "development" && !client) {
  //   // Set up a fake email client for development

  //   console.info(
  //     `Email to ${email} with subject ${subject} sent from ${
  //       from || process.env.NEXT_PUBLIC_APP_NAME
  //     }`,
  //   );
  //   return Promise.resolve();
  // } else if (!client) {
  //   console.error(
  //     "Postmark is not configured. You need to add a POSTMARK_API_KEY in your .env file for emails to work.",
  //   );
  //   return Promise.resolve();
  // }

   const emailResponse = client!.sendEmail({
     From:
       from || marketing
         ? "reggie@jani-ai.com"
         : process.env.NEXT_PUBLIC_IS_DUB
           ? "developer@jani-ai.com"
           : // : `${process.env.NEXT_PUBLIC_APP_NAME} <system@${process.env.NEXT_PUBLIC_APP_DOMAIN}>`
             "developer@jani-ai.com",
     To: email,
     Bcc: bcc,
     ReplyTo: process.env.NEXT_PUBLIC_IS_DUB
       ? "reggie@jani-ai.com"
       : // : `support@${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
         "developer@jani-ai.com",
     Subject: subject,
     ...(text && { TextBody: text }),
     ...(react && { HtmlBody: render(react) }),
     ...(marketing && {
       MessageStream: "broadcast",
     }),
   });
  // console.log(emailResponse, "{}{}{}{][][][][][]")
  return emailResponse;
};
