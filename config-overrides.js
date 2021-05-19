const vConsolePlugin = require('vconsole-webpack-plugin');
const {
  override,
  addWebpackAlias,
  addWebpackPlugin,
  addBabelPlugins,
} = require('customize-cra');
const path = require('path');
const WebpackSpritesmithPlugin = require('webpack-spritesmith');
const TerserPlugin = require('terser-webpack-plugin');

const rewiredMap = () => (config) => {
  config.devtool = config.mode === 'development' ? 'source-map' : false;
  return config;
};
module.exports = override(
  ...addBabelPlugins(
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-proposal-object-rest-spread'
  ),
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
    '@comps': path.resolve(__dirname, './src/components'),
  }),
  addWebpackPlugin(new vConsolePlugin()),
  rewiredMap()
);
