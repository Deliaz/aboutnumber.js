/* eslint-env node */
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		libraryTarget: 'commonjs',
		path: path.resolve(__dirname, 'functions/dist'),
		filename: 'aboutnumber.js',
	},
};