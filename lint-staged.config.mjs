export default {
  '*.{js,jsx,cjs,mjs,ts,tsx}': [
    'eslint --fix --max-warnings 0',
    'prettier --write',
  ],
  '*.{json,css,scss,md,html,yml,yaml}': 'prettier --write',
}
