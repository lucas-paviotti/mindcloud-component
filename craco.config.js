const cracoAlias = require("craco-alias");

module.exports = {
  webpack: {
    configure: {
      ignoreWarnings: [/Failed to parse source map.*react-keycloak/],
    },
  },
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        baseUrl: "./src",
        source: "jsconfig",
      },
    },
  ],
};
