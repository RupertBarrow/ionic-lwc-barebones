const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.NormalModuleReplacementPlugin(/node:crypto/, require.resolve("crypto-browserify")),
    new webpack.NormalModuleReplacementPlugin(/node:path/, require.resolve("path-browserify")),
    new webpack.NormalModuleReplacementPlugin(/node:fs/, require.resolve("browserify-fs")),
    new webpack.NormalModuleReplacementPlugin(/node:readline/, require.resolve("./src/lib/polyfills/readline-mock.js")),
  ],
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util/"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      buffer: require.resolve("buffer/"),
      zlib: require.resolve("browserify-zlib"),
      vm: require.resolve("vm-browserify"),
      url: require.resolve("url/"),
      assert: require.resolve("assert/"),
      os: require.resolve("os-browserify/browser"),
      timers: require.resolve("timers-browserify"),
      //fs: false,
      fs: require.resolve("browserify-fs"),
      net: false,
      //path: false,
      path: require.resolve("path-browserify"),
      dns: false,
      tls: false,
      child_process: false,
      readline: require.resolve("./src/lib/polyfills/readline-mock.js"),
    },
    alias: {
      "node:readline": require.resolve("./src/lib/polyfills/readline-mock.js"),
    },
  },
};
