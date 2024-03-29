// // Generated using webpack-cli https://github.com/webpack/webpack-cli

// const path = require("path");

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// const isProduction = process.env.NODE_ENV == "production";

// const stylesHandler = MiniCssExtractPlugin.loader;

// const config = {
//   entry: "./src/index.tsx",
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'index_bundle.js',
//     publicPath: '/'
//   },
//   devtool: "source-map",
//   devServer: {
//     open: false,
//     host: "localhost",
//     port : 5000,
//     historyApiFallback : true
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, "src", "index.html"),
//     }),

//     new MiniCssExtractPlugin(),

//     // Add your plugins here
//     // Learn more about plugins from https://webpack.js.org/configuration/plugins/
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/i,
//         loader: "ts-loader",
//         exclude: ["/node_modules/"],
//       },
//       {
//         test: /\.css$/i,
//         use: [stylesHandler, "css-loader"],
//       },
//       {
//         test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
//         type: "asset",
//       },

//       // Add your rules for custom modules here
//       // Learn more about loaders from https://webpack.js.org/loaders/
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//     plugins : [new TsconfigPathsPlugin()]
//   },
// };

// module.exports = () => {
//   if (isProduction) {
//     config.mode = "production";
//   } else {
//     config.mode = "development";
//   }
//   return config;
// };
