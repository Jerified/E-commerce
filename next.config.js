/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com", "i.dummyjson.com"]
    },
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig
