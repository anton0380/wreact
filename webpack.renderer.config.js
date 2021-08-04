const rules = require('./webpack.rules');
// const nodeExternals = require('webpack-node-externals');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  // externals: [nodeExternals()],
  module: {
    rules,
  },
};
