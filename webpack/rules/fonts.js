module.exports = {
	test: /\.(eot|ttf|woff|woff2)$/i,
	loaders: [
		{
			loader: 'file-loader',
			options: {
				name: 'fonts/[name].[ext]',
			},
		},
	],
};
