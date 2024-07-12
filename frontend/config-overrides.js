const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    "buffer": require.resolve("buffer/"),
    "path": require.resolve("path-browserify"),
    "zlib": require.resolve("browserify-zlib"),
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "assert": require.resolve("assert/"),
    "stream": require.resolve("stream-browserify"),
    "url": require.resolve("url/"),
    "fs": false,
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "path": require.resolve("path-browserify"),
    "vm": require.resolve("vm-browserify")
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser'
    })
  ]);

  return config;
};
