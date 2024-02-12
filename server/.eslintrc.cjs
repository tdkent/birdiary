/* eslint-env node */
module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-type-checked'
	],
	overrides: [
		{
			extends: ['plugin:@typescript-eslint/disable-type-checked'],
			files: ['./**/*.cjs']
		}
	],
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname
	},
	root: true
};
