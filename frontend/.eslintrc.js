module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'jsx-a11y', 'import'],
	rules: {
		// Add your specific rules here
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
