const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

const plugins = [
	autoprefixer(),
];

if (process.env.NODE_ENV !== 'development') {
	plugins.push(cssnano({
		discardComments: {
			removeAll: true,
		},
	}));
}

module.exports = {
	test: /\.css$/,
	use: [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				hmr: isDevelopment,
			},
		},
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1,
				modules: true,
				localIdentName: '[name]__[local]___[hash:base64:5]',
			},
		},
		{
			loader: 'postcss-loader',
			options: {
				plugins,
			},
		},
	],
};
