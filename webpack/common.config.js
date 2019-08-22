const fromRoot = require('./helpers/from-root');

module.exports = {
	entry: fromRoot('src/index.js'),
	optimization: {
		minimize: process.env.NODE_ENV !== 'development',
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				},
			},
		},
	},
};
