import Link from "next/link";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-cream-pattern min-h-screen font-serif text-black">
      {/* Responsive container */}
      <div className="bg-cream-100 mx-auto min-h-screen max-w-screen-xl border-l-4 border-r-4 border-gray-700 shadow-[10px_0_5px_-5px_rgba(0,0,0,0.3),-10px_0_5px_-5px_rgba(0,0,0,0.3)]">
        {/* Top banner */}
        <header className="bg-cream-300 relative overflow-hidden border-b-4 border-gray-700 p-4 text-center">
          <div className="absolute left-0 top-0 h-1 w-full bg-white opacity-30"></div>
          <h1 className="mb-2 text-center text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-red-700">O</span>
            <span className="text-blue-700">P</span>
            <span className="text-green-700">E</span>
            <span className="text-purple-700">N</span>
            <span className="text-orange-700">B</span>
            <span className="text-teal-700">I</span>
            <span className="text-pink-700">L</span>
            <span className="text-pink-700">L</span>
            <span className="text-yellow-700">I</span>
            <span className="text-indigo-700">N</span>
            <span className="text-red-700">G</span>
          </h1>
          <div className="text-sm italic">
            The Ultimate Billing Solution for the Information Superhighway
          </div>
          <div className="mt-2 text-xs">
            Best viewed in Netscape Navigator 4.0 or higher
          </div>
        </header>

        {/* Under construction banner */}
        <div className="flex animate-pulse items-center justify-center gap-2 border-b-4 border-gray-700 bg-yellow-300 p-2 text-center">
          <div className="h-6 w-6 bg-black"></div>
          <span className="font-bold uppercase">Under Construction</span>
          <div className="h-6 w-6 bg-black"></div>
        </div>

        {/* Navigation bar */}
        <nav className="bg-cream-200 border-b-4 border-gray-700 p-2">
          <div className="grid grid-cols-2 gap-1 border-2 border-gray-700 sm:grid-cols-3 md:grid-cols-6">
            {[
              "HOME",
              "ABOUT",
              "PRODUCTS",
              "DOWNLOAD",
              "GUESTBOOK",
              "LINKS",
            ].map((item) => (
              <div
                key={item}
                className="bg-cream-100 hover:bg-cream-200 border-2 border-gray-700 p-1 text-center transition-colors"
              >
                <Link
                  href="#"
                  className="block w-full font-bold text-blue-700 underline hover:text-blue-900"
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </nav>

        {/* Main content */}
        <main className="p-4">
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Left sidebar */}
            <aside className="border-2 border-dashed border-gray-700 p-2 lg:w-1/4 lg:border-b-0 lg:border-l-0 lg:border-r-2 lg:border-t-0">
              <div className="mb-4">
                <div className="text-cream-100 mb-2 border-2 border-b-black border-l-gray-400 border-r-black border-t-gray-400 bg-blue-700 p-1 text-center font-bold">
                  WHAT'S NEW
                </div>
                <ul className="list-disc space-y-2 pl-5 text-sm">
                  <li>
                    Added PayStack support{" "}
                    <span className="animate-pulse font-bold text-red-600">
                      NEW!
                    </span>
                  </li>
                  <li>Fixed Selcom compatibility issues</li>
                  <li>Updated documentation (03/05/25)</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="text-cream-100 mb-2 border-2 border-b-black border-l-gray-400 border-r-black border-t-gray-400 bg-blue-700 p-1 text-center font-bold">
                  SITE INFO
                </div>
                <div className="text-center text-sm">
                  <div>Visitors: 12,458</div>
                  <div className="my-2">Last updated: 03/07/2025</div>
                  <div className="flex items-center justify-center gap-1">
                    <Mail className="h-4 w-4" />
                    <a
                      href="mailto:webmaster@pay-engine.com"
                      className="text-blue-700 underline"
                    >
                      Email Webmaster
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main content area */}
            <section className="p-2 lg:w-3/4">
              <div className="mb-6 text-center">
                <div className="bg-cream-200 inline-block rotate-[-2deg] border-2 border-gray-700 p-1 shadow-md">
                  <h2 className="mb-2 text-center text-xl font-bold sm:text-2xl">
                    BRING YOUR OWN PAYMENT PROVIDER
                  </h2>
                  <div className="mb-2 h-px w-full bg-gray-700"></div>
                  <p className="text-lg">
                    The revolutionary billing engine for the modern web!
                  </p>
                </div>
              </div>

              <div className="mb-6 text-center">
                <div className="text-cream-100 inline-block w-full overflow-hidden whitespace-nowrap border border-gray-700 bg-black p-1">
                  <div className="animate-marquee">
                    ★★★ SPECIAL OFFER: Sign up before April 1st and receive 50%
                    off your first month! ★★★ SPECIAL OFFER: Sign up before
                    April 1st and receive 50% off your first month! ★★★
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="border-2 border-gray-700">
                  <div className="text-cream-100 border-b-2 border-gray-700 bg-blue-700 p-2 text-center font-bold">
                    SUPPORTED PAYMENT PROVIDERS
                  </div>
                  <div className="grid grid-cols-2 gap-0 sm:grid-cols-3">
                    {[
                      "M-PESA",
                      "PayStack",
                      "Flutterwave",
                      "MTN",
                      "Orange",
                      "Stripe",
                    ].map((provider) => (
                      <div
                        key={provider}
                        className="border-2 border-gray-700 p-2 text-center"
                      >
                        {provider}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="bg-cream-300 border-2 border-b-black border-l-gray-400 border-r-black border-t-gray-400 p-4">
                  <h3 className="mb-4 text-center text-xl font-bold underline">
                    WHY CHOOSE PAY.ENGINE?
                  </h3>
                  <p className="mb-4">
                    Our revolutionary billing system allows you to{" "}
                    <span className="animate-blink">
                      bring your own payment provider
                    </span>{" "}
                    while leveraging our powerful billing logic. No more
                    compromises!
                  </p>
                  <div className="flex justify-center">
                    <Link href="/login">
                      <button className="border-2 border-b-black border-l-gray-400 border-r-black border-t-gray-400 bg-red-600 px-6 py-2 text-lg font-bold text-white transition-colors hover:bg-red-700">
                        Get Started!
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-2 border-gray-700">
                  <div className="text-cream-100 border-b-2 border-gray-700 bg-blue-700 p-2 text-center font-bold">
                    KEY FEATURES
                  </div>
                  <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
                    <div className="bg-cream-200 border-2 border-gray-700 p-2">
                      <div className="mb-2 text-center font-bold">
                        Flexible Integration
                      </div>
                      <p className="text-sm">
                        Connect any payment provider with our standardized API
                        layer.
                      </p>
                    </div>
                    <div className="bg-cream-200 border-2 border-gray-700 p-2">
                      <div className="mb-2 text-center font-bold">
                        Powerful Logic
                      </div>
                      <p className="text-sm">
                        Subscription management, metered billing, and
                        usage-based pricing.
                      </p>
                    </div>
                    <div className="bg-cream-200 border-2 border-gray-700 p-2">
                      <div className="mb-2 text-center font-bold">
                        Full Control
                      </div>
                      <p className="text-sm">
                        Keep your existing payment relationships while upgrading
                        your billing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-cream-300 border-t-4 border-gray-700 p-4 text-center text-sm">
          <div className="mb-2">© 2025 Open Billing - All Rights Reserved</div>
          <div className="flex justify-center gap-4">
            <Link href="#" className="text-blue-700 underline">
              Terms
            </Link>
            <Link href="#" className="text-blue-700 underline">
              Privacy
            </Link>
            <Link href="#" className="text-blue-700 underline">
              Contact
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
