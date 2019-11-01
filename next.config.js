const withCSS = require('@zeit/next-css');

const config = {

  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        use: ['postcss-loader']
      }
    );

    return config;
  }
};

module.exports = withCSS(config);