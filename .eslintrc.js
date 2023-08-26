module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:storybook/recommended',
	],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			},
			rules: {
				'i18next/no-literal-string': 'off',
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
		'react'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'@typescript-eslint/no-unused-vars': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/display-name': 'off',
		'storybook/prefer-pascal-case': 'off',
		'react/prop-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-ts-comment': 'warn',
		'storybook/story-exports': 'off',
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true,
	}
};
