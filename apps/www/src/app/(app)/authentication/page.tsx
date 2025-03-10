"use client";
import { useSession } from "next-auth/react";
import ClientTokens from "./_components/create_client_tokens";
import { useQuery } from "@tanstack/react-query";
import { env } from "~/env";
import { API_KEYS_TABLE } from "./_components/data-table";

export default function () {
  const { data: session } = useSession();

  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ["fetch-api-keys"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `${env.NEXT_PUBLIC_API_URL}/api-keys/${session?.user?.id}`,
  //       {
  //         method: "GET",
  //       },
  //     );
  //     return res.json()
  //   },
  // })

  return (
    <>
    <p>pee pooo</p>
    {/* {!isLoading && data.keys.length === 0 && (
      <section className="rounded-md border-[1px] shadow-lg">
        <ClientTokens />
      </section>
    )}

      {!isLoading && data.keys.length !==0 && <API_KEYS_TABLE data={data} />} */}
    </>
  );
}
