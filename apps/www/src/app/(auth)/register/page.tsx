import Image from "next/legacy/image";
import RegisterPage from "~/components/auth/RegisterPage";

export default function Page() {
  return (
    <div className="container relative flex h-screen items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:space-x-10">
      <div className="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <Image
          src="https://unsplash.com/photos/green-leaves-in-close-up-photography-7co8MfHqQuU"
          alt="hero"
          layout="fill"
          className="object-cover opacity-40"
        />

        <div className="relative z-20 flex items-center text-lg font-medium">
          <div className="relative hidden h-[65px] w-[148px] lg:block"></div>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This software has streamlined every process of my
              company.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <RegisterPage />
    </div>
  );
}
