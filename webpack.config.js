
module.exports = {
  entry: './index.js',
  
  output: {
    // path: 'build',
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
		loader: 'babel-loader',
		query : {
			presets: ['babel-preset-react', 'babel-preset-es2015']
		}
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader' 
      }
    ]
  }
};