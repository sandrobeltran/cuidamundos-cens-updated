/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ucarecdn.com"],
  },
  experimental: {
    serverActions: {},
  },
  webpack: (config) => {
    config.externals = [...config.externals, "bcrypt"];
    return config;
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://cuidamundos.cens.con.co",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, csrfToken, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, api-key, Authorization",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          /* {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'nonce-script'; style-src 'self' 'nonce-style'; img-src 'self' data:; object-src 'none'; frame-ancestors 'none';",
          }, */
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(self), microphone=()",
          },
        ],
      },
      {
        source: "/latest/meta-data",
        headers: [
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, csrf_token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, api-key, Authorization",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
