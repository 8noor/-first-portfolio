// /** @type {import('next').NextConfig} */
// const nextConfig = {};

import { hostname } from "os";

// export default nextConfig;




const nextConfig ={
    images:{
        remotePatterns:[
            {protocol: 'https',
                hostname: "**",
            },
        ],
        unoptimized:true,
    },
};

export default nextConfig;