/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/beratools' : '',
}

module.exports = nextConfig