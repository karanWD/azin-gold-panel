/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["azingold.s3.ir-thr-at1.arvanstorage.ir"],
  },
};

module.exports = nextConfig;
