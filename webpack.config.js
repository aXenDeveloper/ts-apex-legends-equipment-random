const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sass = require('sass');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: sass
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      favicon: './assets/favicon.ico'
    })
  ],
  devServer: {
    publicPath: '/',
    contentBase: './public',
    hot: true,
    open: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};
