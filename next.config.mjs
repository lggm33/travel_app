/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

console.log({isProd})

const nextConfig = {
  basePath: isProd ? '/travel_app' : '',
  assetPrefix: isProd ? '/travel_app/' : '',
};

export default nextConfig;
