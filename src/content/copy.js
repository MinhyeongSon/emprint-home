/**
 * All user-visible copy for the site lives here.
 * Edit `messages.en` and `messages.ko` — keep keys and structure in sync.
 */

export const SUPPORTED_LOCALES = ['en', 'ko']
export const DEFAULT_LOCALE = 'en'
export const LOCALE_STORAGE_KEY = 'emprint.locale'

export function isValidLocale(value) {
  return SUPPORTED_LOCALES.includes(value)
}

export function getMessages(locale) {
  const code = isValidLocale(locale) ? locale : DEFAULT_LOCALE
  return messages[code]
}

const messages = {
  en: {
    common: {
      skipToContent: 'Skip to content',
      brandSubtitle: 'A place to stack your traces',
      navMain: 'Home',
      navDocument: 'Document',
      navGithub: 'GitHub',
      footerTitle: 'Emprint',
      footerCopy: 'Just show you. Don\'t submit your result.',
      footerDocument: 'Document',
      footerRepo: 'GitHub',
      localeSwitcherLabel: 'Language',
      localeEn: 'English',
      localeKo: 'Korean'
    },
    seo: {
      titleSuffix: 'Emprint',
      home: {
        pageTitle: 'Home',
        description:
          'Emprint is a quiet personal archive and publishing space. Anthologies, traces that accumulate like commits, and permanence over endless feeds.'
      },
      document: {
        pageTitle: 'Document',
        description:
          'Step-by-step Emprint guide: install without an account, set up your folder, write drafts and posts, then go online when you are ready.'
      },
      notFound: {
        pageTitle: '404',
        description: 'Emprint page not found.'
      }
    },
    downloads: {
      sectionEyebrow: 'Downloads',
      pageTitle: 'Installers',
      compactTitle: 'Installer matrix',
      downloadCta: 'Download',
      releasePending: 'Release URL pending',
      placeholderNotice:
        'GitHub Release is not configured. Set `GATSBY_EMPRINT_REPO_URL` (and release URLs) to the correct repository.',
      platforms: {
        'macos-arm64': {
          label: 'macOS Apple Silicon',
          detail: 'M1, M2, M3, M4'
        },
        'macos-x64': {
          label: 'macOS Intel',
          detail: 'Intel x64'
        },
        windows: {
          label: 'Windows',
          detail: 'x64 installer'
        }
      }
    },
    landing: {
      hero: {
        epigraph: 'Just show you. Don\'t submit your result.',
        title: 'A space to keep your process—not just the outcome.',
        lede:
          'Emprint treats each piece as a trace and each revision as a mark on a timeline, so what you leave behind is not only what you shipped but how you changed along the way.',
        ribbon: 'Personal archive · Publish · Anthologies',
        quote: '“I keep the whole path—not only the finished piece.”',
        logoAlt: 'Emprint wordmark',
        panelLeft: 'workspace',
        panelRight: 'portable by design',
        releaseLabel: 'release reference'
      },
      why: {
        eyebrow: 'WHY.',
        title: 'Behind the polished result you display, you still carry a longer trail of process.',
        paragraphs: [
          'Most platforms only publish the finished layer: portfolios, launches, highlights. That is one slice of growth—not the whole shelf.',
          'Developers already have commit history: tries, reversals, and progress you can read. Emprint widens that instinct to anyone who writes, photographs, designs, or thinks in public.',
          'The aim is not speed or scale. It is a durable, personal shelf of traces you chose to keep.'
        ]
      },
      commit: {
        eyebrow: 'COMMIT',
        title: 'Publishing as a trace—not a post that disappears the moment you delete it.',
        body:
          'Identity also lives in the history behind the work. Emprint keeps revisions and a sense of time, so the archive reads like a notebook that still remembers crossed-out lines, returns, and quiet edits.',
        panelLeft: 'timeline',
        panelRight: 'traces',
        logLines: [
          '* trace: add morning draft',
          '* revise: tighten closing paragraph',
          '* keep: choose fragment for the shelf',
          '* publish: leave another mark on the path'
        ]
      },
      anthologies: {
        eyebrow: 'ANTHOLOGIES',
        title: 'Different shelves in the same room.',
        intro: 'An anthology is a vessel for your traces.',
        items: [
          {
            id: 'memoir',
            name: 'Memoir',
            mood: 'Traces of growth',
            text: 'Records of how you grew. PORTFOLIO.'
          },
          {
            id: 'column',
            name: 'Column',
            mood: 'Traces of writing',
            text: 'Thoughts and experience in prose. BLOG.'
          },
          {
            id: 'dictionary',
            name: 'Dictionary',
            mood: 'Traces of knowledge',
            text: 'Concepts and understanding that accumulate. WIKI.'
          },
          {
            id: 'fragments',
            name: 'Fragments',
            mood: 'Traces of accomplishment',
            text: 'Sketches, photos, impressions. SHOWCASE.'
          },
          {
            id: 'blank',
            name: 'Blank',
            mood: 'Traces you shape freely',
            text: 'For code-led stories and experimental layouts—without leaving this archive.'
          }
        ]
      },
      fragments: {
        eyebrow: 'Fragments',
        title: 'A shelf to put your work on display.',
        body:
          'Like records catching the light on a shelf, Fragments asks for slow looking—memory and attention—instead of endless scrolling.'
      },
      blank: {
        eyebrow: 'Blank',
        title: 'Freedom without leaving Emprint.',
        body:
          'Blank is for developers and technical makers who want full control over expression. Emprint lowers the threshold for newcomers without removing the ceiling for people who still want to build the page by hand.'
      },
      quiet: {
        eyebrow: 'PHILOSOPHY',
        title: 'What Emprint refuses to be.',
        intro: 'No algorithmic pressure. No scoreboard. No infinite feed.',
        values: ['Permanence over virality', 'Reflection over stimulation', 'Ownership: your traces are not disposable content']
      },
      features: {
        eyebrow: 'EXPLORE',
        title: 'Traces you leave with Emprint',
        intro: 'Companion features Emprint brings along on that path.',
        items: [
          {
            id: 'workspace',
            title: 'Files that stay on your computer',
            summary:
              'Drafts, posts, and site code live together in one folder. Your work is not locked inside a platform you do not control.',
            linkLabel: 'Local workspace',
            linkTo: '/document/#firstRun'
          },
          {
            id: 'flow',
            title: 'Content and design in one flow',
            summary:
              'Move between posting and Implement so what you write and how the page looks grow inside the same working rhythm.',
            linkLabel: 'Content & custom design',
            linkTo: '/document/#writing'
          },
          {
            id: 'publish',
            title: 'Publishing can reach your live site',
            summary:
              'The goal is an end-to-end path: with a straightforward GitHub sign-in, what you publish can appear on a site that is yours.',
            linkLabel: 'Deployment',
            linkTo: '/document/#deploy'
          },
          {
            id: 'lanes',
            title: 'Not one homepage—many that are still yours',
            summary:
              'Each anthology you build in Emprint can become its own homepage—several personal sites instead of a single flattened stream.',
            linkLabel: 'Anthologies = your homepages',
            linkTo: '/#anthologies'
          }
        ]
      },
      closing: {
        eyebrow: 'IF THIS FEELS LIKE YOURS',
        title: 'If you want to keep the path you have walked',
        body:
          'Install when you are ready; open the docs whenever you need a guide. When everything feels in place, start leaving your traces.',
        primaryCta: 'Install Emprint',
        secondaryCta: 'Open document',
        tertiaryCta: 'View source'
      }
    },
    documentPage: {
      eyebrow: 'Document',
      title: 'Emprint—start from the beginning, step by step',
      intro:
        'No coding background is needed. Go in order: install the app, choose a folder on your computer for your work, learn to write, then—only when you want—connect to the internet. Use the left-hand list to jump to any section.',
      sidebarTitle: 'On this page',
      sidebarAriaLabel: 'Documentation',
      navOverview: 'Getting started',
      navNotes: 'Notes',
      notesEyebrow: 'Notes',
      notesTitle: 'About the install buttons here',
      notesBody:
        'The download buttons on this help page open the official Emprint app download area. This help site and the app may use different web addresses; if something looks out of date, check the Emprint home page for the latest installer.',
      sections: [
        {
          id: 'install',
          navLabel: 'Install',
          title: 'Install the app',
          summary:
            'Emprint 0.1.0 supports recent Mac computers (Apple or Intel chip) and 64-bit Windows. Pick the installer that matches your machine.',
          body:
            'You can download and install without creating any online account first. You will only need a free GitHub account later, when you want to back your work up online or publish a simple website.',
          bullets: [
            'In the table below, choose Mac (Apple chip), Mac (Intel), or Windows, then tap Download.',
            'Mac: open the downloaded file and drag Emprint into Applications. Windows: run the installer and follow the on-screen steps.',
            'If Emprint says a small helper program is missing, use the link inside the app to add it—usually a one-time setup.'
          ]
        },
        {
          id: 'firstRun',
          navLabel: 'First steps',
          title: 'First launch: your folder and your account',
          summary:
            'The first time you open Emprint, you choose a folder on your computer where your writing and images will be kept.',
          body:
            'Treat that folder as your personal project drawer. Everything stays on your machine until you decide to connect the internet. When you are ready to sync or publish, the app will walk you through signing in to GitHub (a free service many creative tools use). Until then, you can write and save locally with no account.',
          bullets: [
            'If you do not have a GitHub account yet, you can create one for free at github.com whenever the app asks—or a little before, if you prefer.',
            'When Emprint shows a short code and a web address, open your browser, go to that address, type the code, and approve the sign-in. This safely links the app to your account.',
            'Pick a folder you understand—often an empty folder or a dedicated “Emprint” folder—so backups stay easy to find.',
            'Use “start new” or “open existing” inside the app depending on whether you are beginning fresh or continuing old work.'
          ]
        },
        {
          id: 'writing',
          navLabel: 'Writing',
          title: 'Writing, drafts, and your site’s look',
          summary:
            'The app is organized into a few areas. They may look technical, but they map to simple ideas: finished writing, work-in-progress, and (optional) the appearance of your site.',
          body:
            'Posts is for writing you consider ready to share. Drafts is for ideas still taking shape. Settings holds account and project choices. If you later want finer control over layout or colors, the Implement area opens the deeper site files—you can ignore it until you need it.',
          bullets: [
            'Open Drafts or Posts and start typing. Optional lines at the top can carry a title or date; the app can help you fill them in.',
            'Move work from draft toward “ready” using the actions inside Emprint when you feel finished.',
            'Use Implement only when you want to adjust site structure or styling beyond the basics.',
            'Assets is reserved for pictures and other media as that part of the app grows.'
          ]
        },
        {
          id: 'deploy',
          navLabel: 'Online',
          title: 'Putting your work online (when you are ready)',
          summary:
            'A coming goal is to help you turn your saved folder into a simple public website. Today, focus on writing locally; Emprint will add clearer “go live” steps as releases mature.',
          body:
            '“Publishing” will mean: save your latest writing in the app, then send a copy to your linked online project so visitors can open a web link. Until you connect an account, everything stays private on your computer.',
          bullets: [
            'When the in-app checklist mentions linking an account, follow those screens after you have a GitHub login.',
            'When your version offers a “send changes” or publish action, use it, then open the web address Emprint shows to check the result.',
            'The website you are reading now only explains the program; your own writing and site will live at the addresses Emprint gives you.'
          ]
        }
      ]
    },
    notFound: {
      eyebrow: '404',
      title: 'Page not found.',
      body: 'The path you opened is not part of this site. Start again from Home or Document.',
      mainCta: 'Go to Home',
      documentCta: 'Open Document'
    }
  },
  ko: {
    common: {
      skipToContent: '본문으로 건너뛰기',
      brandSubtitle: '흔적들을 쌓는 공간',
      navMain: '홈',
      navDocument: '문서',
      navGithub: 'GitHub',
      footerTitle: 'Emprint',
      footerCopy:
        'Just show you. Don\'t submit your result.',
      footerDocument: '문서',
      footerRepo: 'GitHub',
      localeSwitcherLabel: '언어',
      localeEn: 'English',
      localeKo: '한국어'
    },
    seo: {
      titleSuffix: 'Emprint',
      home: {
        pageTitle: '메인',
        description:
          'Emprint는 조용한 개인 아카이브이자 출판 공간입니다. 앤솔로지, 커밋으로 남는 흔적, 피드보다 지속성을 중시합니다.'
      },
      document: {
        pageTitle: '문서',
        description:
          'Emprint를 처음 쓰는 분을 위한 순서 안내: 계정 없이 설치, 작업 폴더 정하기, 글쓰기, 필요할 때 인터넷에 올리기까지.'
      },
      notFound: {
        pageTitle: '404',
        description: '요청하신 Emprint 페이지를 찾을 수 없습니다.'
      }
    },
    downloads: {
      sectionEyebrow: 'DOWNLOADS',
      pageTitle: 'Installers',
      compactTitle: '설치 파일 구성',
      downloadCta: '다운로드',
      releasePending: '릴리스 URL 대기',
      placeholderNotice:
        'GitHub Release가 준비되지 않은 환경입니다. `GATSBY_EMPRINT_REPO_URL` 등을 올바른 저장소·릴리스 주소로 설정해 주세요.',
      platforms: {
        'macos-arm64': {
          label: 'macOS Apple Silicon',
          detail: 'M1, M2, M3, M4'
        },
        'macos-x64': {
          label: 'macOS Intel',
          detail: 'Intel x64'
        },
        windows: {
          label: 'Windows',
          detail: 'x64 설치 프로그램'
        }
      }
    },
    landing: {
      hero: {
        epigraph: 'Just show you. Don\'t submit your result.',
        title: '결과가 아닌 과정을 남기는 공간',
        lede:
          'Emprint는 글 한 편을 하나의 흔적으로, 수정은 시간축 위의 기록으로 남겨 무엇을 냈는지뿐 아니라 어떻게 변해 왔는지도 드러낼 수 있게 합니다.',
        ribbon: 'Personal archive · Publish · anthologies',
        quote: '“결과물만이 아닌 지나온 모든 것을 남깁니다.”',
        logoAlt: 'Emprint 로고타입',
        panelLeft: 'workspace',
        panelRight: 'portable by design',
        releaseLabel: 'release reference'
      },
      why: {
        eyebrow: 'WHY.',
        title: '당신은 꺼내둔 결과물 뒤에 더 많은 과정을 가진 존재입니다.',
        paragraphs: [
          '대부분의 플랫폼은 다듬어진 결과만을 게시합니다. 포트폴리오, 런칭, 하이라이트. 그것은 창작과 성장의 한 층에 불과합니다.',
          '개발자에게는 커밋 히스토리가 있습니다. 시도와 번복, 성장이 보이는 흔적이죠. Emprint는 그 감각을 글·사진·디자인·생각을 세상에 남기는 이들에게까지 넓힙니다.',
          '목표는 속도나 규모가 아닙니다. 스스로 고르고 쌓아온 흔적이 남는, 오래가는 한 사람의 선반입니다.'
        ]
      },
      commit: {
        eyebrow: 'COMMIT',
        title: '지워도 영원히 사라지는 포스트가 아니라, 흔적으로서의 발행.',
        body:
          '정체성은 작품 뒤에 쌓인 역사에도 있습니다. Emprint는 수정과 시간축까지 품어, 지웠다 쓴 흔적, 돌아온 길까지 기억하는 공책처럼 읽히게 합니다.',
        panelLeft: 'timeline',
        panelRight: 'traces',
        logLines: [
          '* trace: 아침 초안 추가',
          '* revise: 맺음말 다듬기',
          '* keep: 선반에 둘 프래그먼트 고르기',
          '* publish: 길 위에 흔적 하나 더 남기기'
        ]
      },
      anthologies: {
        eyebrow: 'ANTHOLOGIES',
        title: '같은 방 안, 다른 선반들.',
        intro:
          'Anthology는 당신의 흔적을 담을 그릇입니다.',
        items: [
          {
            id: 'memoir',
            name: 'Memoir',
            mood: '성장의 흔적',
            text: '나의 성장을 담은 기록들. PORTFOLIO.'
          },
          {
            id: 'column',
            name: 'Column',
            mood: '기록의 흔적',
            text: '당신의 생각과 경험을 담은 글. BLOG'
          },
          {
            id: 'dictionary',
            name: 'Dictionary',
            mood: '지식의 흔적',
            text: '나의 이해가 쌓여 가는 것들. WIKI'
          },
          {
            id: 'fragments',
            name: 'Fragments',
            mood: '성취의 흔적',
            text: '스케치, 사진, 인상. SHOWCASE'
          },
          {
            id: 'blank',
            name: 'Blank',
            mood: '자유롭게 남길 흔적',
            text: '코드로 이야기하고 실험 레이아웃을 쌓을 이들을 위해.'
          }
        ]
      },
      fragments: {
        eyebrow: 'Fragments',
        title: '나의 작품을 전시할 선반.',
        body:
          '빛이 닿는 선반에 LP를 늘인 것처럼, Fragments는 빠른 스크롤보다 눈과 기억에 담아주기를 청합니다.'
      },
      blank: {
        eyebrow: 'Blank',
        title: 'Emprint에서도 떠나지 않을 자유.',
        body:
          'Blank는 표현의 통제를 원하는 개발자·기술 창작자를 환영합니다. Emprint는 문턱을 낮추되, 손으로 페이지를 짜고 싶은 이들의 천장은 걷지 않습니다.'
      },
      quiet: {
        eyebrow: 'PHILOSOPHY',
        title: 'Emprint가 되지 않으려는 것들.',
        intro: '알고리즘의 압박도, 점수판도, 무한 피드도 없습니다.',
        values: [
          '바이럴리티보다 지속',
          '자극보다 성찰',
          '소유: 당신의 흔적은 소모성 콘텐츠가 아닙니다'
        ]
      },
      features: {
        eyebrow: 'EXPLORE',
        title: 'Emprint가 당신과 남길 흔적들.',
        intro:
          'Emprint가 함께하는 보조 기능',
        items: [
          {
            id: 'workspace',
            title: '내 컴퓨터에 저장되는 파일',
            summary:
              'Markdown 글·초안·사이트 코드가 한 폴더에 있습니다. 당신의 결과물이 플랫폼에 갇히지 않습니다.',
            linkLabel: 'Local Workspace',
            linkTo: '/document/#firstRun'
          },
          {
            id: 'flow',
            title: '컨텐츠와 디자인을 한 흐름으로',
            summary:
              'Posting과 Implement 사이를 오가며, 같은 작업 루틴 안에서 웹페이지의 디자인과 컨텐츠까지 만들어갈 수 있습니다.',
            linkLabel: 'Contents & Custom Design',
            linkTo: '/document/#writing'
          },
          {
            id: 'publish',
            title: '발행하면 웹페이지에 반영됩니다.',
            summary:
              'GitHub 로그인만으로 내가 게시한 컨텐츠가 홈페이지가 되어 살아나는 end-to-end 경험을 목표로 합니다.',
            linkLabel: 'Deployment',
            linkTo: '/document/#deploy'
          },
          {
            id: 'lanes',
            title: '단 하나의 홈페이지가 아닌 다양한 나만의 홈페이지',
            summary:
              'Emprint 에서 만든 Anthology들은 모두 당신의 홈페이지가 됩니다.',
            linkLabel: 'Anthologies = Your Homepages',
            linkTo: '/#anthologies'
          }
        ]
      },
      closing: {
        eyebrow: 'IF THIS FEELS LIKE YOURS',
        title: '당신이 걸어온 흔적을 남기고 싶다면',
        body:
          '준비되면 설치하고, 가이드가 필요하면 문서로 이동하세요. 모든 준비가 끝났다면, 지금부터 당신의 흔적을 남겨보세요.',
        primaryCta: 'Emprint 설치',
        secondaryCta: '문서 열기',
        tertiaryCta: '소스 보기'
      }
    },
    documentPage: {
      eyebrow: '문서',
      title: 'Emprint, 처음부터 따라하기',
      intro:
        '개발 경험이 없어도 괜찮습니다. 아래 순서대로만 진행해 보세요: 앱 설치 → 내 컴퓨터에 둘 작업 폴더 정하기 → 글쓰기 익히기 → (원할 때) 인터넷에 연결하기. 왼쪽 목차에서 원하는 부분으로 이동할 수 있습니다.',
      sidebarTitle: '목차',
      sidebarAriaLabel: '문서 섹션',
      navOverview: '시작하기',
      navNotes: '노트',
      notesEyebrow: '노트',
      notesTitle: '이 페이지의 설치 버튼에 대해',
      notesBody:
        '이 문서에 있는 다운로드 버튼은 Emprint 앱 공식 다운로드 페이지로 연결됩니다. 안내용 웹사이트와 앱이 서로 다른 주소를 쓸 수 있으니, 링크가 맞지 않으면 Emprint 홈에서 최신 설치 파일을 확인해 주세요.',
      sections: [
        {
          id: 'install',
          navLabel: '설치',
          title: '앱 설치하기',
          summary:
            'Emprint 0.1.0은 최근 맥(M1 등 Apple 칩 또는 Intel)과 64비트 Windows에서 실행됩니다. 사용 중인 기기에 맞는 설치 파일을 고르세요.',
          body:
            '온라인 계정 없이도 먼저 다운 받아 설치할 수 있습니다. 나중에 글을 인터넷에 올리거나 백업하려 할 때 무료 GitHub 계정이 필요하다는 안내가 나올 수 있습니다.',
          bullets: [
            '아래 표에서 맥(Apple 칩), 맥(Intel), Windows 중 하나를 고른 뒤 [다운로드]를 누릅니다.',
            '맥: 받은 파일을 열고 Emprint를 응용 프로그램 폴더로 끌어 넣습니다. Windows: 설치 프로그램을 실행하고 화면 안내를 따릅니다.',
            '앱에서 “추가로 필요한 작은 프로그램이 있다”고 하면, 앱 안에 있는 안내 링크를 눌러 한 번만 설치하면 됩니다.'
          ]
        },
        {
          id: 'firstRun',
          navLabel: '첫 설정',
          title: '첫 실행: 작업 폴더와 계정',
          summary:
            'Emprint를 처음 열면, 글과 이미지를 모아 둘 컴퓨터 안의 폴더를 고르게 됩니다.',
          body:
            '이 폴더는 나만의 “작업 서랍”이라고 생각하면 됩니다. 인터넷에 연결하지 않아도 여기에 쓴 내용은 내 컴퓨터에 그대로 남습니다. 나중에 백업이나 웹에 올리기를 원하면, 앱이 안내하는 대로 GitHub(무료로 가입할 수 있는 프로젝트 보관 서비스)에 로그인하면 됩니다. 그 전까지는 계정 없이 로컬에서만 작업해도 됩니다.',
          bullets: [
            'GitHub 계정이 없다면 github.com 에서 무료로 만들 수 있습니다. 앱이 로그인을 요청할 때 만들어도 되고, 미리 만들어 두어도 됩니다.',
            '앱에 짧은 코드와 웹 주소가 나오면, 브라우저를 열고 그 주소로 들어가 코드를 입력한 뒤 승인합니다. 이렇게 하면 앱과 내 계정이 안전하게 연결됩니다.',
            '나중에 찾기 쉬운 곳에 비어 있는 폴더나 “Emprint 전용” 폴더를 골라 두면 좋습니다.',
            '새로 시작이면 앱 안의 “새로 만들기”, 이어하기면 “열기” 같은 메뉴를 선택합니다.'
          ]
        },
        {
          id: 'writing',
          navLabel: '글쓰기',
          title: '글, 초안, 사이트 모양',
          summary:
            '앱에는 이름이 조금 생소한 영역이 있지만, 뜻은 단순합니다. 남길 글, 아직 다듬는 중인 글, 그리고 (원하면) 사이트 모양을 바꾸는 곳입니다.',
          body:
            'Posts는 “남겨도 괜찮은 글”을, Drafts는 “아직 만드는 중인 글”을 두기 좋습니다. 설정은 계정·프로젝트 선택 등에 씁니다. 레이아웃·색 등을 더 세밀하게 바꾸고 싶을 때만 Implement 영역을 열어도 됩니다. 처음에는 Drafts나 Posts만 써도 충분합니다.',
          bullets: [
            'Drafts나 Posts를 열고 평소처럼 타이핑합니다. 맨 위에 제목·날짜 같은 줄을 둘 수 있는데, 없어도 되고 앱이 도와줄 수도 있습니다.',
            '초안이 마음에 들면 앱 안의 안내에 따라 Posts 쪽으로 옮기거나 “완성에 가깝다”고 표시해 둡니다.',
            '사이트 모양을 더 손보고 싶을 때만 Implement를 사용합니다. 처음에는 건너뛰어도 됩니다.',
            'Assets는 사진 등 미디어를 모아 둘 자리로, 앱이 자라면서 채워질 예정입니다.'
          ]
        },
        {
          id: 'deploy',
          navLabel: '인터넷에 올리기',
          title: '인터넷에 올리기 (준비가 되면)',
          summary:
            '앞으로는 저장해 둔 폴더를 간단한 웹사이트로 보여 주는 흐름을 다듬는 것이 목표입니다. 지금은 컴퓨터에서 편하게 쓰는 데 집중하고, “올리기” 단계는 앱 안 안내가 늘어나는 대로 따르면 됩니다.',
          body:
            '“올리기”는 곧, 앱에서 최신 글을 저장한 뒤 내 온라인 프로젝트로 보내서 다른 사람이 웹 주소로 볼 수 있게 하는 것을 뜻합니다. 계정을 연결하기 전까지는 모든 내용이 내 PC 안에만 있습니다.',
          bullets: [
            '앱의 체크리스트에서 계정 연결을 안내하면, 그때 GitHub 로그인을 마친 뒤 화면을 따라가면 됩니다.',
            '내가 쓰는 버전에 “변경 보내기” 또는 “게시” 같은 버튼이 보이면 눌러 보고, 앱이 알려 주는 웹 주소를 열어 잘 보이는지 확인합니다.',
            '지금 읽고 있는 이 안내 사이트는 프로그램 설명용이고, 내가 만든 글과 사이트는 Emprint가 알려 주는 주소에 따로 생깁니다.'
          ]
        }
      ]
    },
    notFound: {
      eyebrow: '404',
      title: '페이지를 찾을 수 없습니다.',
      body: '찾으시던 문서는 현재 경로에 없습니다. 메인 페이지나 문서 메뉴에서 다시 시작해 주세요.',
      mainCta: '메인으로',
      documentCta: '문서 열기'
    }
  }
}
