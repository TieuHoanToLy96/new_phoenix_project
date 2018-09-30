const webpack = require("webpack")
const merge = require("webpack-merge")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const IO = require("./app/utils/io")

const dev = process.env.NODE_ENV !== "production"
console.log("|> node env:", process.env.NODE_ENV)
console.log("|> hostname:", process.env.HUST_HOSTNAME)
console.log("|> origin:", process.env.HUST_ORIGIN)

let common = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: [/\.sass$/, /\.css$/],
        loader: ExtractTextPlugin.extract({use: "css-loader!sass-loader", fallback: "style-loader"})
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader?name=/images/[name].[ext]"
      },
      {
        test: /\.(ttf|eot|svg|woff2?)$/,
        loader: "file-loader?name=/fonts/[name].[ext]",
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
}


if (dev) {
  common.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
      analyzerPort: 8889,
      openAnalyzer: true
    })
  )
}

module.exports = [
  merge(common, {
    node: {
      fs: "empty"
    },
    entry: [
      "@babel/polyfill",
      __dirname + "/app/style/main.sass",
      __dirname + "/app/app.js"
    ],
    output: {
      path: __dirname + "/../priv/static",
      filename: "js/app.js"
    },
    resolve: {
      modules: [
        "node_modules",
        __dirname + "/app"
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
        $: "jquery",
        jQuery: "jquery"
      }),
      new webpack.DefinePlugin({
        __HUST_ORIGIN__: JSON.stringify(process.env.HUST_ORIGIN || "localhost"),
        __NODE_ENV__: JSON.stringify(process.env.NODE_ENV || "development"),
        IO: IO
      }),
      new CopyWebpackPlugin([{ from: __dirname + "/static"}]),
      new ExtractTextPlugin({ filename: "css/dist/app.css", allChunks: true }),
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /vi|en/),
      new webpack.IgnorePlugin(/unicode\/category\/So/, /node_modules/),
      new webpack.IgnorePlugin(/sass.js\/dist\/sass.sync/, /node_modules/)
    ]
  })
]
