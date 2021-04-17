const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const sass = require('sass');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        test: /\.html$/,
        loader: 'html-loader',
        include: [path.resolve(__dirname, 'src')],
        options: {
          sources: false
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        include: [path.resolve(__dirname, 'src')],
        options: {
          name: '[name].[ext]',
          outputPath: 'images'
        }
      },
      {
        test: /\.scss$/i,
        include: [path.resolve(__dirname, 'src')],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      favicon: './src/favicon.ico'
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/images', to: 'images' }]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true,
    open: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};
