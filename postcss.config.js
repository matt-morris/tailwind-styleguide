
const plugins = [
  require('postcss-import'),
  require('tailwindcss')('tailwind.styleguide.js'),
  require('postcss-preset-env'),
]

if (process.env.NODE_ENV === 'production') {
  class TailwindExtractor {
    static extract(content) {
      return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
  }

  plugins.push(
    require('@fullhuman/postcss-purgecss')({
      content: [
        'pages/**/*.js',
        'components/**/*.js',
      ],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ["js", "jsx"]
        }
      ]
    })
  )

  plugins.push(
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true
        },
      }],
    })
  )
}

module.exports = {
  plugins,
}
