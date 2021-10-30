const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, context) => {
    console.log(config.module.rules);

    config.module.rules.push({
      test: /.(ts|tsx)$/,
      include: [path.resolve(__dirname, "../shared")],
      loader: "ts-loader",
    });

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        shared: path.resolve(__dirname, "../shared"),
      },
    };

    // console.log(config);

    return config;
  },
};
