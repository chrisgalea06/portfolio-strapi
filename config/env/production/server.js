module.exports = ({ env }) => ({
  proxy: true,
  host: "0.0.0.0",
  port: process.env.PORT,
  url: env("PUBLIC_URL", "https://admin.christophergalea.com"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
  trustProxy: true, // This line ensures Strapi trusts the proxy headers
});
