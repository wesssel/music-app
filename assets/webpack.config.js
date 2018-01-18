const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'app.js',
    path: `${__dirname}/../priv/static/js`,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-loader',
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|jpg)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
}

if (process.env.NODE_ENV === 'test') {
  module.exports.externals = [nodeExternals()]
  module.exports.devtool = 'inline-cheap-module-source-map'
}
