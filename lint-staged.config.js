module.exports = {
  '*.{less,sass,scss,md,json,yml}': ['prettier --write', 'git add'],
  '*.{js,jsx,html}': ['prettier --write', 'eslint --fix', 'git add'],
  '*.ts?(x)': [
    'prettier --parser=typescript --write',
    'eslint --fix',
    'git add',
  ],
}
