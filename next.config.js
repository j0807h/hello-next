/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() { /* URL 이동시 유저가 확인 가능. source -> destination 으로 이동 */
    return[
      {
        source: "/contact",
        destination: `/form`,
        permanent: false,
      },
    ];
  },
  async rewrites() { /* 유저를 redirect 시키기는 하지만 URL이 변경 되는 것을 유저가 확인하지 못함 */
    return[
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
        // permanent: false,
      },
    ];
  },
}

module.exports = nextConfig
