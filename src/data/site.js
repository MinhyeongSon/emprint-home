const currentVersion = '0.1.0'
const githubRepoUrl = process.env.GATSBY_EMPRINT_REPO_URL || 'https://github.com/MinhyeongSon/emprint'
const siteUrl = process.env.GATSBY_SITE_URL || 'https://minhyeongson.github.io/emprint-home'
const releaseBaseUrl =
  process.env.GATSBY_EMPRINT_RELEASE_BASE_URL || `${githubRepoUrl}/releases/download/v${currentVersion}`
const releaseLinksEnabled = process.env.GATSBY_ENABLE_RELEASE_LINKS === 'true'

const isPlaceholderRepo = githubRepoUrl.includes('your-account')
const isPlaceholderSiteUrl = siteUrl.includes('your-account')
const isPlaceholderRelease = !releaseLinksEnabled || releaseBaseUrl.includes('your-account')

const downloads = [
  {
    label: 'macOS Apple Silicon',
    detail: 'M1, M2, M3, M4',
    filename: 'Emprint-0.1.0-arm64.dmg'
  },
  {
    label: 'macOS Intel',
    detail: 'Intel x64',
    filename: 'Emprint-0.1.0-x64.dmg'
  },
  {
    label: 'Windows',
    detail: 'x64 installer',
    filename: 'Emprint-Setup-0.1.0-x64.exe'
  }
].map((item) => ({
  ...item,
  href: `${releaseBaseUrl.replace(/\/$/, '')}/${item.filename}`,
  disabled: isPlaceholderRelease
}))

const principles = [
  {
    title: 'Local-first',
    description: '글, 코드, 자산이 모두 로컬 파일과 Markdown에 남습니다. Emprint는 데이터를 가두지 않고 워크스페이스를 실행하는 런타임에 가깝습니다.'
  },
  {
    title: 'Git-native',
    description: 'Git을 백엔드처럼 다루는 구조라서 commit, push, GitHub Pages 배포 흐름이 자연스럽게 이어집니다.'
  },
  {
    title: 'Workspace is the product',
    description: '앱 자체보다 워크스페이스가 중심입니다. VS Code에서 열어도 되고, 직접 clone해서 관리해도 흐름이 끊기지 않습니다.'
  },
  {
    title: 'GitHub Pages ready',
    description: '초기 MVP 방향 자체가 GitHub Pages 배포를 전제로 잡혀 있어, 개인 사이트나 글 기반 프로젝트를 다루기에 잘 맞습니다.'
  }
]

const workflow = [
  {
    step: '01',
    title: 'Install and connect',
    description: 'Emprint를 설치하고 Git과 GitHub 로그인 상태를 준비합니다.'
  },
  {
    step: '02',
    title: 'Create or open a workspace',
    description: '새 워크스페이스를 만들거나 기존 저장소를 열어 포터블한 작업 디렉터리를 유지합니다.'
  },
  {
    step: '03',
    title: 'Write in Markdown, edit in src',
    description: 'Posts, Drafts, Assets, Implement 영역을 오가며 글과 사이트 코드를 한 흐름 안에서 다룹니다.'
  },
  {
    step: '04',
    title: 'Commit, push, publish',
    description: 'GitHub와 연결된 상태에서 push 후 GitHub Pages로 이어지는 퍼블리싱 루프를 완성합니다.'
  }
]

const docsSections = [
  {
    title: '설치',
    summary: '현재 로컬 릴리스 폴더 기준으로 Emprint 0.1.0은 macOS Apple Silicon, macOS Intel, Windows x64 설치 파일이 준비되어 있습니다.',
    bullets: [
      '설치 버튼은 GitHub Releases 자산 URL을 기준으로 생성됩니다.',
      '실제 배포 전에는 `GATSBY_EMPRINT_RELEASE_BASE_URL`과 `GATSBY_ENABLE_RELEASE_LINKS=true`를 함께 설정해 주세요.',
      'Git이 없는 환경에서는 앱의 가이드에 따라 먼저 Git 설치가 필요합니다.'
    ]
  },
  {
    title: '첫 실행과 워크스페이스 준비',
    summary: 'Emprint는 local-first, Git-native 원칙을 따르기 때문에 루트 폴더와 저장소 연결이 초반 흐름의 중심입니다.',
    bullets: [
      '앱 실행 후 Git 준비 상태를 확인합니다.',
      'GitHub Device Flow로 로그인해 토큰과 저장소 생성 권한을 연결합니다.',
      '워크스페이스 루트 폴더를 선택한 뒤 새 저장소를 만들거나 기존 저장소를 엽니다.'
    ]
  },
  {
    title: '글과 코드 작업',
    summary: '현재 구현 기준으로 Emprint는 Posts, Drafts, Assets, Implement, Settings 같은 섹션을 중심으로 동작합니다.',
    bullets: [
      'Posts와 Drafts에서 Markdown 글을 작성하고 frontmatter를 관리할 수 있습니다.',
      'Implement에서는 워크스페이스의 `src/` 디렉터리를 열어 사이트 코드를 편집할 수 있습니다.',
      'Assets 영역은 점진적으로 확장될 수 있도록 자리 잡아둔 상태입니다.'
    ]
  },
  {
    title: '배포 흐름',
    summary: 'Emprint의 로드맵은 commit, push, GitHub Pages live까지 이어지는 end-to-end 배포 경험을 목표로 하고 있습니다.',
    bullets: [
      'GitHub 저장소 생성 또는 clone 이후 origin을 연결합니다.',
      '변경 내용을 commit, push한 다음 GitHub Pages 배포 상태를 확인합니다.',
      '이 `emprint-home` 프로젝트는 그 퍼블리싱 결과를 소개하는 별도 GitHub Pages 프런트 역할을 합니다.'
    ]
  }
]

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
  principles,
  workflow,
  docsSections,
  directoryTree,
  heroBadges: ['LOCAL-FIRST', 'GIT-NATIVE', 'GITHUB PAGES READY'],
  brandKeywords: ['Traces', 'Memory', 'Archives', 'Quiet intelligence'],
  notice:
    '현재는 저장소 링크만 연결되어 있고 설치 버튼은 닫혀 있습니다. 첫 GitHub Release가 준비되면 `GATSBY_EMPRINT_RELEASE_BASE_URL`과 `GATSBY_ENABLE_RELEASE_LINKS=true`를 설정해 주세요.'
}
