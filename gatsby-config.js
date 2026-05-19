const siteUrl = process.env.GATSBY_SITE_URL || 'https://devminson.github.io/emprint-home'

module.exports = {
  siteMetadata: {
    title: 'Emprint',
    description: 'Local-first, Git-native workspace runtime for creators, developers, and AI-native workflows.',
    siteUrl
  },
  pathPrefix: '/emprint-home',
  trailingSlash: 'always',
  graphqlTypegen: false
}
