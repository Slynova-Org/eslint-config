'use strict'

module.exports = {
  extends: [
    './rules/bestPractices',
    './rules/errors',
    './rules/es6',
    './rules/node',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
}
