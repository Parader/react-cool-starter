/* Require hooks for server-side */

const sass = require('node-sass');
const path = require('path');
const postcssConfig = require('../../postcss.config');

module.exports = () => {
  // Images
  require('asset-require-hook')({
    // Must use the same option with webpack's configuration
    extensions: ['gif', 'jpg', 'jpeg', 'png', 'webp'],
    publicPath: '/assets/',
    limit: 10240,
    name: '[name].[hash:8].[ext]'
  });

  // Fonts
  require('asset-require-hook')({
    // Must use the same option with webpack's configuration
    extensions: ['woff', 'woff2', 'ttf', 'eot', 'svg'],
    publicPath: '/assets/',
    limit: 10240,
    name: '[name].[hash:8].[ext]'
  });
};
