/**
 * Webpack configuration for building the Kapenta UI
 * 
 */
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.resolve("src", "main", "javascript", "main.js"),
  mode: 'development',
  output: {
    path: path.resolve('src', 'main', 'resources', 'public', 'js'),
    filename: 'main.min.js',
    libraryTarget: 'umd',
    publicPath: '/public/'
    // chunkFilename: '[id].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) //&& !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
}
