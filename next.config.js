/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    output: "standalone",
    distDir: "build",
    experimental: {
        serverActions:{
            allowedOrigins: ["localhost:3000"]
        }
    }
};

export default nextConfig;