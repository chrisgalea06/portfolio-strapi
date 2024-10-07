module.exports = [
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://admin.christophergalea.com",
        "https://www.admin.christophergalea.com",
        "https://www.christophergalea.com",
        "https://christophergalea.com",
      ],
      headers: [
        "Content-Type",
        "Authorization",
        "X-Requested-With",
        "X-CSRF-Token",
        "Origin",
      ],
      expose: ["Authorization"],
    },
  },
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "http:", "https:"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::poweredBy",
  {
    name: "strapi::logger",
    config: {
      level: "debug", // Set this to "debug" for more detailed logs
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
