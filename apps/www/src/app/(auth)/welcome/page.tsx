import { constructMetadata } from "~/utils/functions/constructMetadata";
import WelcomePageClient from "./_components/WelcomePageClient";


export const runtime = "nodejs";

// export const metadata = constructMetadata({
//   title: `Welcome to ${process.env.NEXT_PUBLIC_APP_NAME}`,
// });

export default async function WelcomePage() {

  
  return (
    <>
      {/* <Suspense> */}

        <WelcomePageClient />
      {/* </Suspense> */}
    </>
  );
}
