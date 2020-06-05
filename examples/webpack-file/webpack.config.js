const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => {
  const extractor = new MiniCssExtractPlugin()

  const plugins = [extractor]

  const webpackConfig = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },

    plugins,
  }

  return webpackConfig
}
