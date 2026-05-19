/** Technical site config (URLs, versions, download filenames). All UI copy: `src/content/copy.js`. */
const currentVersion = '0.2.9'
const githubRepoUrl = process.env.GATSBY_EMPRINT_REPO_URL || 'https://github.com/devminson/emprint'
const releaseRepoUrl =
  process.env.GATSBY_EMPRINT_RELEASE_REPO_URL || 'https://github.com/devminson/emprint-release'
const siteUrl = process.env.GATSBY_SITE_URL || 'https://devminson.github.io/emprint-home'
const kofiUrl = process.env.GATSBY_KOFI_URL || 'https://ko-fi.com/devminson'
const releaseBaseUrl =
  process.env.GATSBY_EMPRINT_RELEASE_BASE_URL ||
  `${releaseRepoUrl}/releases/download/v${currentVersion}`

const isPlaceholderRepo = githubRepoUrl.includes('your-account')
const isPlaceholderSiteUrl = siteUrl.includes('your-account')
const isPlaceholderRelease = releaseBaseUrl.includes('your-account')

/** Technical download rows — labels/details live in `src/content/copy.js`. */
const downloads = [
  {
    id: 'macos-arm64',
    filename: 'Emprint-0.2.9-arm64.pkg'
  },
  {
    id: 'macos-x64',
    filename: 'Emprint-0.2.9-x64.pkg'
  },
  {
    id: 'windows',
    filename: 'Emprint-Setup-0.2.9-x64.exe'
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
  releaseRepoUrl,
  siteUrl,
  kofiUrl,
  releaseBaseUrl,
  isPlaceholderRepo,
  isPlaceholderSiteUrl,
  isPlaceholderRelease,
  downloads,
  directoryTree
}
