const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/server/server.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./', 'build')
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
