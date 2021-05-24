const vConsolePlugin = require('vconsole-webpack-plugin');
const {
  override,
  addWebpackAlias,
  addWebpackPlugin,
  addBabelPlugins,
} = require('customize-cra');
const path = require('path');
// const WebpackSpritesmithPlugin = require('webpack-spritesmith');
// const TerserPlugin = require('terser-webpack-plugin');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'common', /* filename= */'common.js'); // 分析以下模块的共用代码, 单独打一个包到common.js
// var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 单独打包CSS
// var HtmlWebpackPlugin = require('html-webpack-plugin'); // Html文件处理
// 接收运行参数
const argv = require('yargs').describe('debug', 'debug 环境').argv; // use 'webpack --debug'
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
  addWebpackPlugin(new vConsolePlugin({ enable: !!argv.debug })),
  rewiredMap()
);
