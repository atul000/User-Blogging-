// const withCSS = require("@zeit/next-css");
const withStyles = require("@webdeb/next-styles");

module.exports = withStyles({
  publicRuntimeConfig: {
    APP_NAME: "SEOBLOG",
    API_DEVELOPMENT: "http://localhost:8000/api",
    API_PRODUCTION: "https://blog.com/api",
    PRODUCTION: false,
    modules: true,
    DOMAIN_DEVELOPMENT: "http://localhost:3000",
    DOMAIN_PRODUCTION: "https://blog.com",
    FB_APP_ID: "957972861292768",
  },
});
