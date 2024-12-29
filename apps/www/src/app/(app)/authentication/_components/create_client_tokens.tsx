import React from "react";
import CreateAPIKeyForm from "./create_token_form";

const ClientTokens = () => {
  return (
    <div className="p-6">
      <h2 className="mb-12 text-xl font-semibold">Client-side tokens</h2>

      <div className="space-y-4 py-12 text-center">
        <div className="mb-4 inline-block">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="mx-auto text-gray-400"
          >
            <rect x="4" y="8" width="16" height="12" rx="2" strokeWidth="1.5" />
            <path
              d="M7 15l2.5-2.5M9.5 12.5L12 10"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M4 8h16M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2"
              strokeWidth="1.5"
            />
            <path
              d="M15 14l1 1m1 1l-1-1m-1 1l1-1m-1-1l1 1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="text-lg font-medium text-gray-700">
          You haven't generated any client-side tokens yet
        </h3>

        <p className="text-gray-600">
          Learn about{" "}
          <a href="#" className="text-blue-500 hover:underline">
            client-side tokens
          </a>
        </p>
        <CreateAPIKeyForm />
      </div>
    </div>
  );
};

export default ClientTokens;
