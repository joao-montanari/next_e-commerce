/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'img.terabyteshop.com.br', 
      'www.kabum.com.br', 
      'policompras.com', 
      'ae01.alicdn.com', 
      'hotsite.pichau.com.br', 
      'www.westerndigital.com',
      'www.google.com',
      'www.westerndigital.com'
    ]
  }
}

module.exports = nextConfig
