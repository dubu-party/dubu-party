require("dotenv").config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["heyhey.i234.me"],
  },
  env: {
    BASE_FETCH_URL: process.env.BASE_FETCH_URL,
    BASE_SERVER_URL: process.env.BASE_SERVER_URL,
  },
  async rewrites() {
    // 서버로 요청을 보낼 때, 프론트엔드에서 보내는 요청을 서버로 보내는 것이 아니라,
    // 프론트엔드에서 보내는 요청을 프론트엔드에서 받아서 서버로 보내는 것
    return [
      {
        source: "/api/:path*", // /api/로 시작하는 모든 요청을 heyhey.i234.me:3333/api/로 보낸다.
        destination: "http://heyhey.i234.me:3333/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
