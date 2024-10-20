/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://github.com/"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      },
    ],
  }
};

export default nextConfig;
