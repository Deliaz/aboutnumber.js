/* eslint-env node */
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: './src/index.js',
	plugins: [new CleanWebpackPlugin()],
	target: 'node',
	externals: [nodeExternals()],
	output: {
		libraryTarget: 'umd',
		library: 'aboutnumber',
		libraryExport: 'default',
		path: path.resolve(__dirname, './dist'),
		filename: 'aboutnumber.js',
		globalObject: 'this',
	},
};
