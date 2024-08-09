/** @type {import('next').NextConfig} */
const nextConfig = {
    httpAgentOptions:{
        keepAlive: false,
    },
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname:  "cdn.dummyjson.com",
            }
        ]
    },
};

export default nextConfig;
