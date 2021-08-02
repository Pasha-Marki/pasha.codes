var webpack = require('webpack');
const path = require('path');
var APP_DIR = path.resolve(__dirname, 'src/frontend/app');
var BUILD_DIR = path.resolve(__dirname, 'src/frontend/public');

module.exports = {
  entry: ['babel-polyfill', APP_DIR + "/index.js"],
  output: {
    path: BUILD_DIR,
    filename: "js/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
	
	exclude: /node_modules/,
	use: {
	  loader: 'babel-loader',
	  options: {
	    presets: ['env','react']
	  }
	}
      },
      {
        test: /\.css$/,
        use: {
	  loader: 'style-loader'
        }
      },
      {
        test: /\.css$/,
	use: {
	  loader: 'css-loader',
	  options: {
	    modules: true,
	    localIdentName: '[name]__[local]__[hash:base64:5]'
	  }
	}
      },
      {
	test: /\.(pdf|gif|png|jpe?g)$/,
	use: {
	  loader: 'file-loader',
	  options:{
	    name: 'resources/[name].[ext]'
	  }
	}
      }
    ]
  },
  node: {
    fs: "empty",
    net: "empty"
  }

}
