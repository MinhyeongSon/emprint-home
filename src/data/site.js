/** Technical site config (URLs, versions, download filenames). All UI copy: `src/content/copy.js`. */
const currentVersion = '0.1.0'
const githubRepoUrl = process.env.GATSBY_EMPRINT_REPO_URL || 'https://github.com/MinhyeongSon/emprint'
const siteUrl = process.env.GATSBY_SITE_URL || 'https://minhyeongson.github.io/emprint-home'
const releaseBaseUrl =
  process.env.GATSBY_EMPRINT_RELEASE_BASE_URL || `${githubRepoUrl}/releases/download/v${currentVersion}`

const isPlaceholderRepo = githubRepoUrl.includes('your-account')
const isPlaceholderSiteUrl = siteUrl.includes('your-account')
const isPlaceholderRelease = releaseBaseUrl.includes('your-account')

/** Technical download rows — labels/details live in `src/content/copy.js`. */
const downloads = [
  {
    id: 'macos-arm64',
    filename: 'Emprint-0.1.0-arm64.dmg'
  },
  {
    id: 'macos-x64',
    filename: 'Emprint-0.1.0-x64.dmg'
  },
  {
    id: 'windows',
    filename: 'Emprint-Setup-0.1.0-x64.exe'
  }
].map((item) => ({
  ...item,
  href: `${releaseBaseUrl.replace(/\/$/, '')}/${item.filename}`,
  disabled: isPlaceholderRelease
}))

const directoryTree = ['workspace/', '  posts/', '  drafts/', '  assets/', '  src/', '  .workspace/']

export default {
  currentVersion,
  githubRepoUrl,
  siteUrl,
  releaseBaseUrl,
  isPlaceholderRepo,
  isPlaceholderSiteUrl,
  isPlaceholderRelease,
  downloads,
  directoryTree
}
