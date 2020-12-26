/* eslint-env node */
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	plugins: [new CleanWebpackPlugin()],
	output: {
		libraryTarget: 'umd',
		library: 'aboutnumber',
		libraryExport: 'default',
		path: path.resolve(__dirname, './dist'),
		filename: 'aboutnumber.js',
		globalObject: 'this',
		umdNamedDefine: true,
	},
};
