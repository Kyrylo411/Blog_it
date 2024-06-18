import { BuildOptions } from '../types/config';

export function buildBabelLoader({ isDev }: BuildOptions) {
	return {
		test: /\.(js|jsx|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env', '@babel/preset-react'],
				plugins: [
					[
						'i18next-extract',
						{ locales: ['uk', 'en'], keyAsDefaultValue: false },
					],
					isDev && require.resolve('react-refresh/babel'),
				].filter(Boolean),
			},
		},
	}
}

