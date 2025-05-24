export default {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss}': ['stylelint --fix'],
  '*.{json,md,html,yml,yaml}': ['prettier --write'],
};
