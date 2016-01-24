var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './semantic/dist/semantic.min.js',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }, { 
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,   
      loaders: ["url?limit=10000&mimetype=application/font-woff"] 
    }, { 
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    
      loaders: ["url?limit=10000&mimetype=application/octet-stream"] 
    }, { 
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    
      loaders: ["file"] 
    }, { 
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    
      loaders: ["url?limit=10000&mimetype=image/svg+xml"]
    }]
  }
};
