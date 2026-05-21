/** Document sections with screen-by-screen workflow (images in static/assets/images/workflow/). */

const installSectionEn = {
  id: 'install',
  navLabel: 'Install',
  title: 'Install the app',
  summary:
    'Emprint 0.2.10 supports recent Mac computers (Apple or Intel chip) and 64-bit Windows. Install with Homebrew or Scoop when you can.',
  body:
    'You can install without creating an online account first. You will only need a free GitHub account later when you back up or publish. Use the command blocks in the Install section on the home page (recommended); direct installers are listed there only if you need them. On Mac, direct downloads are .pkg installers with a post-install step that helps with Gatekeeper on unsigned open-source builds.',
  bullets: [
    'macOS: run the Homebrew commands in Terminal. Windows: run the Scoop commands in PowerShell.',
    'After installing, open Emprint from Applications (Mac) or the Start menu (Windows).',
    'Direct download on Mac: the .pkg runs a post-install script to ease Gatekeeper. If the app still will not open, right-click Emprint in Applications → Open, or use System Settings → Privacy & Security → Open Anyway.'
  ]
}

const installSectionKo = {
  id: 'install',
  navLabel: '설치',
  title: '앱 설치하기',
  summary:
    'Emprint 0.2.10은 최근 맥(M1 등 Apple 칩 또는 Intel)과 64비트 Windows에서 실행됩니다. 가능하면 Homebrew·Scoop으로 설치하세요.',
  body:
    '온라인 계정 없이도 설치할 수 있습니다. 나중에 백업·게시할 때 무료 GitHub 계정이 필요할 수 있습니다. 홈의 설치 명령(권장)을 쓰고, 직접 설치 파일은 필요할 때만 사용하세요. 맥 직접 다운로드는 Gatekeeper 보조용 post-install이 포함된 .pkg입니다.',
  bullets: [
    '맥: 터미널에서 Homebrew 명령 실행. Windows: PowerShell에서 Scoop 명령 실행.',
    '설치 후 맥은 응용 프로그램, Windows는 시작 메뉴에서 Emprint 실행.',
    '맥에서 열리지 않으면 응용 프로그램에서 Emprint 우클릭 → [열기], 또는 시스템 설정 → 개인정보 보호 및 보안 → [그래도 열기].'
  ]
}

const nodeGitEn = [
  {
    id: 'nodejs',
    navLabel: 'Node.js',
    title: 'Install Node.js (required for full features)',
    summary:
      'Without Node.js, live preview and other build tools will not work. Install it before you finish the in-app setup wizard.',
    body:
      'Emprint runs Node.js and npm in the background for preview and local site builds. The first-run wizard checks Node.js on step 2—install it on your computer first if that step stays blocked.',
    bullets: [
      'Download the current LTS installer from https://nodejs.org and accept the defaults.',
      'Quit and reopen Emprint after installing so detection can refresh.',
      'Optional: run `node -v` and `npm -v` in Terminal or Command Prompt.'
    ]
  },
  {
    id: 'git',
    navLabel: 'Git',
    title: 'Install Git (required for sync and publishing)',
    summary:
      'Emprint uses Git to track your writing and talk to GitHub. Install Git before linking an account or publishing.',
    body:
      'Git is separate from the Emprint app. The setup wizard checks Git on step 1. Many Macs already have Git after installing Apple’s command-line developer tools.',
    bullets: [
      'Download from https://git-scm.com/downloads if needed (default options are fine).',
      'After installing, quit and reopen Emprint.',
      'Optional: run `git --version` to confirm.'
    ]
  }
]

const nodeGitKo = [
  {
    id: 'nodejs',
    navLabel: 'Node.js',
    title: 'Node.js 설치하기 (전체 기능에 필요)',
    summary:
      'Node.js가 없으면 미리보기 등이 동작하지 않습니다. 앱 안 첫 설정 마법사 전에 설치해 두세요.',
    body:
      'Emprint는 미리보기·로컬 빌드에 Node.js와 npm을 사용합니다. 첫 실행 마법사 2단계에서 확인합니다—막히면 먼저 PC에 Node.js를 설치하세요.',
    bullets: [
      'https://nodejs.org 에서 LTS 설치 파일을 받아 기본 옵션으로 설치합니다.',
      '설치 후 Emprint를 완전히 종료했다가 다시 실행합니다.',
      '확인(선택): `node -v`, `npm -v` 실행.'
    ]
  },
  {
    id: 'git',
    navLabel: 'Git',
    title: 'Git 설치하기 (동기화·게시에 필요)',
    summary:
      'Git이 없으면 GitHub 연동·게시가 실패할 수 있습니다. 계정 연결 전에 설치하세요.',
    body:
      'Git은 Emprint와 별개입니다. 설정 마법사 1단계에서 확인합니다. 맥은 “명령줄 개발자 도구” 설치 후 Git이 있을 수 있습니다.',
    bullets: [
      '필요하면 https://git-scm.com/downloads 에서 설치합니다.',
      '설치 후 Emprint를 다시 실행합니다.',
      '확인(선택): `git --version` 실행.'
    ]
  }
]

const wizardStepsEn = [
  {
    id: 'w-git',
    image: 'wizard-01-git.png',
    title: 'Wizard step 1 — Git',
    body: 'On first launch, Emprint checks that Git is available. When the card shows Ready, tap Continue.',
    alt: 'Emprint setup wizard on the Git step'
  },
  {
    id: 'w-node',
    image: 'wizard-02-node.png',
    title: 'Wizard step 2 — Node.js',
    body: 'Next, Emprint checks Node.js (v22 or newer). Install Node.js on your Mac or PC if this step does not turn green.',
    alt: 'Emprint setup wizard on the Node.js step'
  },
  {
    id: 'w-github',
    image: 'wizard-03-github.png',
    title: 'Wizard step 3 — GitHub',
    body: 'Sign in with GitHub so Emprint can create or connect repositories for your anthologies. Follow the on-screen code in your browser if device login is shown.',
    alt: 'Emprint setup wizard on the GitHub sign-in step'
  },
  {
    id: 'w-root',
    image: 'wizard-04-root.png',
    title: 'Wizard step 4 — Workspace root folder',
    body: 'Choose a folder on your computer where anthology projects will live—like a dedicated “Emprint” drawer. Tap Select folder, then Finish.',
    alt: 'Emprint setup wizard on the root folder step'
  },
  {
    id: 'w-hub',
    image: 'wizard-05-hub.png',
    title: 'Finish — Anthology hub',
    body: 'When setup completes, you land on the Anthology hub: your list of sites (anthologies) and the entry point to open or create one.',
    alt: 'Emprint anthology hub after setup wizard'
  }
]

const wizardStepsKo = [
  {
    id: 'w-git',
    image: 'wizard-01-git.png',
    title: '마법사 1단계 — Git',
    body: '첫 실행 시 Git 설치 여부를 확인합니다. Ready가 보이면 [계속]을 누릅니다.',
    alt: 'Emprint 설정 마법사 Git 단계'
  },
  {
    id: 'w-node',
    image: 'wizard-02-node.png',
    title: '마법사 2단계 — Node.js',
    body: '이어서 Node.js(v22 이상)를 확인합니다. 막히면 PC에 Node.js를 먼저 설치하세요.',
    alt: 'Emprint 설정 마법사 Node.js 단계'
  },
  {
    id: 'w-github',
    image: 'wizard-03-github.png',
    title: '마법사 3단계 — GitHub',
    body: 'GitHub 로그인으로 앤솔로지용 저장소를 연결합니다. 기기 로그인 코드가 나오면 브라우저에서 승인합니다.',
    alt: 'Emprint 설정 마법사 GitHub 단계'
  },
  {
    id: 'w-root',
    image: 'wizard-04-root.png',
    title: '마법사 4단계 — 작업 루트 폴더',
    body: '프로젝트를 둘 컴퓨터 안 폴더를 고릅니다. [폴더 선택] 후 [완료]를 누릅니다.',
    alt: 'Emprint 설정 마법사 루트 폴더 단계'
  },
  {
    id: 'w-hub',
    image: 'wizard-05-hub.png',
    title: '완료 — 앤솔로지 허브',
    body: '설정이 끝나면 앤솔로지 허브로 이동합니다. 사이트 목록을 보고 새로 만들거나 열 수 있습니다.',
    alt: '설정 완료 후 Emprint 앤솔로지 허브'
  }
]

const hubStepsEn = [
  {
    id: 'h-list',
    image: 'hub-anthologies.png',
    title: 'Anthology list',
    body: 'The hub lists anthologies you have registered. Use Open to enter an existing site or Create new anthology in the sidebar.',
    alt: 'Emprint anthology hub list'
  },
  {
    id: 'h-create',
    image: 'hub-create-panel.png',
    title: 'Create a new anthology',
    body: 'The create panel asks for format (Column or Memoir), title, description, and GitHub repository details. Column is the blog-style flow shown in the following screens.',
    alt: 'Emprint create new anthology panel'
  }
]

const hubStepsKo = [
  {
    id: 'h-list',
    image: 'hub-anthologies.png',
    title: '앤솔로지 목록',
    body: '허브에서 등록한 앤솔로지를 봅니다. [열기]로 들어가거나 사이드바에서 [새 앤솔로지 만들기]를 선택합니다.',
    alt: 'Emprint 앤솔로지 허브 목록'
  },
  {
    id: 'h-create',
    image: 'hub-create-panel.png',
    title: '새 앤솔로지 만들기',
    body: '형식(Column·Memoir), 제목, 설명, GitHub 저장소 정보를 입력합니다. 아래 화면은 Column(블로그형) 기준입니다.',
    alt: 'Emprint 새 앤솔로지 만들기 패널'
  }
]

const workspaceStepsEn = [
  {
    id: 'ws-posts-list',
    image: 'workspace-posts-list.png',
    title: 'Posts — published writing',
    body: 'Posts holds writing you treat as published on your site. The list shows titles and status; select a row to edit.',
    alt: 'Emprint workspace Posts list'
  },
  {
    id: 'ws-posts-editor',
    image: 'workspace-posts-editor.png',
    title: 'Posts — editor',
    body: 'Write in Markdown. Save from the editor when you are happy with the draft on disk.',
    alt: 'Emprint workspace Posts editor'
  },
  {
    id: 'ws-drafts-list',
    image: 'workspace-drafts-list.png',
    title: 'Drafts — work in progress',
    body: 'Drafts is for pieces still taking shape—same list + editor pattern as Posts.',
    alt: 'Emprint workspace Drafts list'
  },
  {
    id: 'ws-drafts-editor',
    image: 'workspace-drafts-editor.png',
    title: 'Drafts — editor',
    body: 'Use Drafts while ideas are unfinished; move toward Posts when you are ready to publish.',
    alt: 'Emprint workspace Drafts editor'
  },
  {
    id: 'ws-assets',
    image: 'workspace-assets.png',
    title: 'Assets',
    body: 'Assets is your media library for the anthology. Refresh rescans the project folder.',
    alt: 'Emprint workspace Assets'
  },
  {
    id: 'ws-design',
    image: 'workspace-design-template.png',
    title: 'Design — site look',
    body: 'Design controls layout and styling. Pick a template, open preview in the browser (needs Node.js), or switch toward code mode when you are ready.',
    alt: 'Emprint workspace Design template view'
  },
  {
    id: 'ws-design-ai',
    image: 'workspace-design-ai-prompt-modal.png',
    title: 'Design — AI prompt (optional)',
    body: 'Optional AI-assisted styling opens in a modal; close when you are done experimenting.',
    alt: 'Emprint Design AI prompt modal'
  },
  {
    id: 'ws-design-mode',
    image: 'workspace-design-switch-mode-modal.png',
    title: 'Design — switch to code mode',
    body: 'Switching to code mode asks for confirmation because it changes how you edit the site files.',
    alt: 'Emprint Design switch mode confirmation'
  },
  {
    id: 'ws-imprint',
    image: 'workspace-imprint.png',
    title: 'Imprint — publish history',
    body: 'Imprint shows git publish history—traces of what you shipped and when.',
    alt: 'Emprint workspace Imprint history'
  },
  {
    id: 'ws-settings',
    image: 'workspace-settings.png',
    title: 'Settings — anthology studio',
    body: 'Per-anthology settings: project metadata, GitHub connection, and studio options.',
    alt: 'Emprint workspace Settings'
  },
  {
    id: 'ws-palette',
    image: 'workspace-command-palette.png',
    title: 'Command palette',
    body: 'Press ⌘K (Mac) or Ctrl+K (Windows) for quick navigation—jump to hub, sections, or app settings.',
    alt: 'Emprint command palette'
  },
  {
    id: 'ws-app-settings',
    image: 'app-settings-modal.png',
    title: 'App settings',
    body: 'Global Emprint preferences (including GitHub OAuth client) live in the app settings modal from the palette.',
    alt: 'Emprint app settings modal'
  }
]

const workspaceStepsKo = [
  {
    id: 'ws-posts-list',
    image: 'workspace-posts-list.png',
    title: 'Posts — 게시된 글',
    body: 'Posts는 사이트에 올릴 글을 모읍니다. 목록에서 항목을 고른 뒤 편집합니다.',
    alt: 'Emprint Posts 목록'
  },
  {
    id: 'ws-posts-editor',
    image: 'workspace-posts-editor.png',
    title: 'Posts — 편집기',
    body: 'Markdown으로 작성하고 저장합니다.',
    alt: 'Emprint Posts 편집기'
  },
  {
    id: 'ws-drafts-list',
    image: 'workspace-drafts-list.png',
    title: 'Drafts — 작성 중',
    body: 'Drafts는 아직 다듬는 글을 위한 공간입니다.',
    alt: 'Emprint Drafts 목록'
  },
  {
    id: 'ws-drafts-editor',
    image: 'workspace-drafts-editor.png',
    title: 'Drafts — 편집기',
    body: '초안은 Drafts에서, 마음에 들면 Posts로 옮깁니다.',
    alt: 'Emprint Drafts 편집기'
  },
  {
    id: 'ws-assets',
    image: 'workspace-assets.png',
    title: 'Assets',
    body: '이미지 등 미디어를 모아 둡니다. Refresh로 폴더를 다시 읽습니다.',
    alt: 'Emprint Assets'
  },
  {
    id: 'ws-design',
    image: 'workspace-design-template.png',
    title: 'Design — 사이트 모양',
    body: '레이아웃·스타일을 바꿉니다. 미리보기는 Node.js가 필요합니다.',
    alt: 'Emprint Design'
  },
  {
    id: 'ws-design-ai',
    image: 'workspace-design-ai-prompt-modal.png',
    title: 'Design — AI 프롬프트(선택)',
    body: 'AI 스타일 도우미는 모달에서 열고 닫을 수 있습니다.',
    alt: 'Emprint Design AI 모달'
  },
  {
    id: 'ws-design-mode',
    image: 'workspace-design-switch-mode-modal.png',
    title: 'Design — 코드 모드 전환',
    body: '코드 모드로 바꿀 때 확인 창이 뜹니다.',
    alt: 'Emprint 코드 모드 전환 확인'
  },
  {
    id: 'ws-imprint',
    image: 'workspace-imprint.png',
    title: 'Imprint — 게시 기록',
    body: '게시(git) 이력을 시간순으로 봅니다.',
    alt: 'Emprint Imprint'
  },
  {
    id: 'ws-settings',
    image: 'workspace-settings.png',
    title: 'Settings — 스튜디오 설정',
    body: '이 앤솔로지의 메타데이터·GitHub·스튜디오 옵션입니다.',
    alt: 'Emprint Settings'
  },
  {
    id: 'ws-palette',
    image: 'workspace-command-palette.png',
    title: '명령 팔레트',
    body: '⌘K / Ctrl+K로 허브·섹션·앱 설정으로 빠르게 이동합니다.',
    alt: 'Emprint 명령 팔레트'
  },
  {
    id: 'ws-app-settings',
    image: 'app-settings-modal.png',
    title: '앱 설정',
    body: 'GitHub OAuth 등 전역 설정은 팔레트에서 연 앱 설정 모달에 있습니다.',
    alt: 'Emprint 앱 설정 모달'
  }
]

const publishStepsEn = [
  {
    id: 'pub-dialog',
    image: 'workspace-publish-dialog.png',
    title: 'Publish dialog',
    body: 'From the sidebar, Publish opens a dialog to confirm message and target branch before pushing to GitHub.',
    alt: 'Emprint publish dialog'
  },
  {
    id: 'pub-reset',
    image: 'workspace-reset-draft-modal.png',
    title: 'Reset draft (optional)',
    body: 'Reset draft discards local draft changes when you need to realign with the remote—use carefully.',
    alt: 'Emprint reset draft confirmation'
  },
  {
    id: 'pub-success',
    image: 'workspace-publish-success.png',
    title: 'Publish success',
    body: 'After a successful push, Emprint confirms sync. Your site can update via GitHub Pages or your configured deploy flow.',
    alt: 'Emprint publish success state'
  },
  {
    id: 'pub-imprint',
    image: 'workspace-imprint-after-publish.png',
    title: 'Imprint after publish',
    body: 'Imprint lists the new commit so you can see the trace you left.',
    alt: 'Emprint Imprint after publishing'
  },
  {
    id: 'pub-hub',
    image: 'hub-returned.png',
    title: 'Return to hub',
    body: 'Use the title bar control to return to the Anthology hub and switch projects or create another anthology.',
    alt: 'Emprint hub after returning from workspace'
  }
]

const publishStepsKo = [
  {
    id: 'pub-dialog',
    image: 'workspace-publish-dialog.png',
    title: '게시 대화상자',
    body: '사이드바 [Publish]로 메시지와 브랜치를 확인한 뒤 GitHub에 push합니다.',
    alt: 'Emprint 게시 대화상자'
  },
  {
    id: 'pub-reset',
    image: 'workspace-reset-draft-modal.png',
    title: '초안 초기화(선택)',
    body: 'Reset draft는 로컬 초안을 버리고 원격과 맞출 때 씁니다—주의해서 사용하세요.',
    alt: 'Emprint 초안 초기화 확인'
  },
  {
    id: 'pub-success',
    image: 'workspace-publish-success.png',
    title: '게시 완료',
    body: 'push가 성공하면 확인 메시지가 표시됩니다.',
    alt: 'Emprint 게시 성공'
  },
  {
    id: 'pub-imprint',
    image: 'workspace-imprint-after-publish.png',
    title: '게시 후 Imprint',
    body: 'Imprint에 새 커밋이 기록됩니다.',
    alt: 'Emprint 게시 후 Imprint'
  },
  {
    id: 'pub-hub',
    image: 'hub-returned.png',
    title: '허브로 돌아가기',
    body: '제목 표시줄에서 허브로 돌아가 다른 앤솔로지를 열 수 있습니다.',
    alt: 'Emprint 허브로 복귀'
  }
]

export const documentSectionsEn = [
  installSectionEn,
  ...nodeGitEn,
  {
    id: 'wizard',
    navLabel: 'Setup wizard',
    title: 'First-run setup wizard',
    summary:
      'The first time you open Emprint, a short wizard checks Git, Node.js, GitHub, and your workspace folder—in that order.',
    body:
      'Complete each step before Continue unlocks. Screens below follow the same order as the app (captured from a full Column anthology workflow).',
    bullets: [
      'If a step stays blocked, install the tool on your computer first (see Node.js and Git sections), then restart Emprint.',
      'GitHub sign-in links the app to your account for repository create/sync.',
      'The root folder is only for where projects are stored—not your public website URL yet.'
    ],
    steps: wizardStepsEn
  },
  {
    id: 'hub',
    navLabel: 'Anthology hub',
    title: 'Anthology hub',
    summary:
      'After setup, the hub is home base: pick an anthology or create a new Column or Memoir site.',
    body: 'Creating a Column anthology opens the workspace tour in the next section.',
    steps: hubStepsEn
  },
  {
    id: 'workspace',
    navLabel: 'Workspace',
    title: 'Inside the workspace (Column)',
    summary:
      'A Column anthology workspace has six sections in the sidebar—Posts, Drafts, Assets, Design, Imprint, and Settings.',
    body:
      'Keyboard shortcuts 1–6 jump between sections. The flow below matches a typical writing → design → publish path.',
    bullets: [
      'Footer actions include Update (pull), Reset draft, and Publish when Git is linked.',
      'Design → Open preview needs Node.js installed.'
    ],
    steps: workspaceStepsEn
  },
  {
    id: 'publish',
    navLabel: 'Publish',
    title: 'Publish and return to hub',
    summary:
      'When writing is ready, Publish pushes commits to GitHub; Imprint records the trace.',
    body: 'Git must be installed and GitHub connected. Publishing is per anthology repository.',
    steps: publishStepsEn
  }
]

export const documentSectionsKo = [
  installSectionKo,
  ...nodeGitKo,
  {
    id: 'wizard',
    navLabel: '설정 마법사',
    title: '첫 실행 설정 마법사',
    summary:
      'Emprint를 처음 열면 Git → Node.js → GitHub → 작업 폴더 순으로 짧은 마법사가 진행됩니다.',
    body: '각 단계가 준비되면 [계속]이 활성화됩니다. 아래 화면은 앱 순서와 동일합니다(Column 앤솔로지 기준 캡처).',
    bullets: [
      '막히면 Node.js·Git 섹션을 참고해 PC에 먼저 설치한 뒤 Emprint를 다시 실행하세요.',
      'GitHub 로그인은 저장소 생성·동기화용입니다.',
      '루트 폴더는 프로젝트 보관 위치이며, 공개 웹 주소와는 별개입니다.'
    ],
    steps: wizardStepsKo
  },
  {
    id: 'hub',
    navLabel: '앤솔로지 허브',
    title: '앤솔로지 허브',
    summary: '설정 후 허브에서 앤솔로지를 열거나 새로 만듭니다.',
    body: 'Column 앤솔로지를 만들면 다음 섹션의 워크스페이스로 들어갑니다.',
    steps: hubStepsKo
  },
  {
    id: 'workspace',
    navLabel: '워크스페이스',
    title: '워크스페이스 안 (Column)',
    summary:
      'Column 워크스페이스 사이드바: Posts, Drafts, Assets, Design, Imprint, Settings.',
    body: '단축키 1–6으로 섹션을 바꿀 수 있습니다. 아래는 글쓰기→디자인→게시 흐름입니다.',
    bullets: [
      '하단에 Update(pull), Reset draft, Publish가 있습니다.',
      'Design 미리보기는 Node.js가 필요합니다.'
    ],
    steps: workspaceStepsKo
  },
  {
    id: 'publish',
    navLabel: '게시',
    title: '게시하고 허브로 돌아가기',
    summary: 'Publish로 GitHub에 push하고 Imprint에 기록이 남습니다.',
    body: 'Git 설치와 GitHub 연결이 필요합니다.',
    steps: publishStepsKo
  }
]
