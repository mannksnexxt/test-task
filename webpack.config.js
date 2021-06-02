const path = require('path');
const CssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		app: [
			'./js/app.js',
			'./scss/style.scss'
		]
	},
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '../'
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					CssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				]
			},
		]
	},
	plugins: [
		new CssExtractPlugin({
			filename: './css/style.css'
		})
	]
}