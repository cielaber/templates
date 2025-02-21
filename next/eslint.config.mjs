import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
    'plugin:markdown/recommended-legacy',
    'prettier',
  ),
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
      '.gitlab-ci.yml',
    ],
  },
  {
    rules: {
      'import/no-anonymous-default-export': 0,
      'react-hooks/rules-of-hooks': 0,
    },
  },
]

export default eslintConfig
