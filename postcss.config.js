const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './**/*.tsx',
    './node_modules/nprogress/*.js'
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g)
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
    ? [purgecss, require('cssnano')]
    : []
  ],
}