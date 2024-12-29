/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "unsplash.com"
      },
      {
        hostname: "avatars.githubusercontent.com", // for github users url
      },
      {
        hostname: "api.dicebear.com", // for the avatar url
      },
      {
        hostname: "lh3.googleusercontent.com", // for Google account urls
      },
    ],
  },
};

export default config;
