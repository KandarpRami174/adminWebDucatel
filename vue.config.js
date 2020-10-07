const path = require("path");

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://3.16.27.56:3020/",
      },
    },
  },
  configureWebpack: {
    devtool: "source-map",
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  },
  // chainWebpack: config => {
  //   config.performance
  //     .maxEntrypointSize(400000)
  //     .maxAssetSize(400000)
  // },
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/" + process.env.CI_PROJECT_NAME + "/"
      : "/",
};
