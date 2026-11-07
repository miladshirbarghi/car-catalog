import js from '@eslint/js'
import fs from 'node:fs'
import path from 'node:path'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

const adjacentRelativeImports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'require aliases for imports outside the current folder',
    },
    schema: [],
    messages: {
      useAlias:
        'Use a folder alias when importing from outside this file’s folder.',
    },
  },
  create(context) {
    const filename = context.filename
    const currentDirectory = path.dirname(filename)
    const extensions = [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.mjs',
      '.cjs',
      '.json',
      '.css',
    ]

    function resolveImport(source) {
      const target = path.resolve(currentDirectory, source)
      const candidates = [
        target,
        ...extensions.map(extension => `${target}${extension}`),
      ]

      candidates.push(
        ...extensions.map(extension => path.join(target, `index${extension}`))
      )

      return candidates.find(candidate => fs.existsSync(candidate))
    }

    function checkSource(sourceNode) {
      if (
        typeof sourceNode?.value !== 'string' ||
        (!sourceNode.value.startsWith('./') &&
          !sourceNode.value.startsWith('../'))
      ) {
        return
      }

      if (sourceNode.value.startsWith('../')) {
        context.report({ node: sourceNode, messageId: 'useAlias' })
        return
      }

      const resolvedPath = resolveImport(sourceNode.value)
      const isAdjacent = resolvedPath
        ? path.dirname(resolvedPath) === currentDirectory
        : !sourceNode.value.slice(2).includes('/') &&
          !sourceNode.value.startsWith('../')

      if (!isAdjacent) {
        context.report({ node: sourceNode, messageId: 'useAlias' })
      }
    }

    return {
      ImportDeclaration(node) {
        checkSource(node.source)
      },
      ExportNamedDeclaration(node) {
        checkSource(node.source)
      },
      ExportAllDeclaration(node) {
        checkSource(node.source)
      },
      ImportExpression(node) {
        checkSource(node.source)
      },
    }
  },
}

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    files: ['src/**/*.{js,jsx,cjs,mjs,ts,tsx}'],
    plugins: {
      local: {
        rules: {
          'adjacent-relative-imports': adjacentRelativeImports,
        },
      },
    },
    rules: {
      'local/adjacent-relative-imports': 'error',
    },
  },
])
