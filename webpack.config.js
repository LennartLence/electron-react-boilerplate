const path = require("path");
const webpack = require("webpack");
const { spawn } = require("child_process");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  devtool: "inline-source-map",

  entry: "./src/index.jsx",

  output: {
    publicPath: "http://localhost:8080/",
    path: path.resolve(__dirname, "build/webpack"),
    filename: "build.js"
  },

  externals: [
    nodeExternals({
      modulesFromFile: {
        include: ["dependencies"]
      }
    })
  ],

  target: "electron-renderer",

  node: {
    __dirname: false,
    __filename: false
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].[ext]" }
          }
        ]
      }
    ]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".jsx", ".json"]
  },

  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    hot: true,
    publicPath: "http://localhost:8080/",
    before: () => {
      spawn("electron", ["."], {
        shell: true,
        env: process.env,
        stdio: "inherit"
      })
        .on("close", code => process.exit(code))
        .on("error", spawnError => console.error(spawnError));
    }
  }
};
