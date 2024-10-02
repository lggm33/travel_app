/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

console.log({isProd})

const nextConfig = {
  basePath: '/travel_app' ,
  assetPrefix: '/travel_app/' ,
};

export default nextConfig;
