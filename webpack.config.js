const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        include: [
          path.resolve(__dirname, 'src/fonts'),
        ],
        use: ["file-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: '[path][name].[ext]'
          }
        }],
      },
      {
        test: /\.svg$/,
        include: [
          path.resolve(__dirname, 'src/icons'),
          path.resolve(__dirname, 'src/images')
        ],
        use: ["svg-url-loader?noquotes=true"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body"
    })
  ],
  devServer: {
    historyApiFallback: true,
  }
};
