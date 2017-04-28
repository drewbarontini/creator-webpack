var path = require('path');

var options = {
  js: {
    entry: {
      file: 'index.js',
      directory: 'src'
    },
    output: {
      file: 'bundle.js',
      directory: 'public'
    }
  }
};

var entry = './' + options.js.entry.directory + '/' + options.js.entry.file;

module.exports = {
  entry: entry,
  output: {
    filename: options.js.output.file,
    path: path.resolve(__dirname, options.js.output.directory)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  devServer: {
    compress: true,
    port: 9000,
    contentBase: 'public'
  }
};
