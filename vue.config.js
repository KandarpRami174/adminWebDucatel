const path = require("path");

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        // target: "http://3.16.27.56:3020/",
        target: "http://localhost:1910/",
      },
    },
  },
  configureWebpack: {
    devtool: "source-map",
  },
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/" + process.env.CI_PROJECT_NAME + "/"
      : "/",
};
