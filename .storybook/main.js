const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"],
      include: path.resolve(__dirname, "../")
    });
    return config;
  }
};