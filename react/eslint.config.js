import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    languageOptions: {
      ...pluginReactConfig.languageOptions,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: [
      'dist/',
      '/node_modules/**',
      '**/*.svg',
      '**/*.sh',
      '/public/**',
      '/debug/**',
      '/.husky/**',
      '.editorconfig',
      '.eslintcache',
      '.gitignore',
      '.prettierignore',
      '.stylelintignore',
    ],
  },
  // TODO: eslint-plugin-react 插件的bug，以下lint开启会报错，等待后续官方修复后删除
  {
    rules: {
      'react/no-string-refs': 0,
      'react/display-name': 0,
      'react/no-direct-mutation-state': 0,
      'react/prop-types': 0,
      'react/require-render-return': 0,
      'react/jsx-no-undef': 0,
      'react/jsx-uses-react': 0,
      'react/react-in-jsx-scope': 0,
      'react/jsx-uses-vars': 0,
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 0, // 允许使用any
    },
  },
]
