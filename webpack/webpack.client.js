const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/client/client.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./', 'public')
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
