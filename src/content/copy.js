/**
 * All user-visible copy for the site lives here.
 * Edit `messages.en` and `messages.ko` — keep keys and structure in sync.
 */

import { documentSectionsEn, documentSectionsKo } from './document-workflow.js'

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
      footerSupport: 'Emprint through support',
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
          'Screen-by-screen Emprint guide: install, setup wizard, anthology hub, workspace, and publish—with screenshots from the app.'
      },
      notFound: {
        pageTitle: '404',
        description: 'Emprint page not found.'
      }
    },
    install: {
      sectionEyebrow: 'Install',
      pageTitle: 'Install Emprint',
      compactTitle: 'Install',
      recommendLead:
        'We recommend Homebrew (macOS) or Scoop (Windows) over downloading installers by hand. Package managers make installs and updates easier.',
      macTitle: 'macOS (Homebrew)',
      macPrereq: 'Requires Homebrew — https://brew.sh',
      windowsTitle: 'Windows (Scoop)',
      windowsPrereq: 'Requires Scoop — https://scoop.sh',
      directTitle: 'Direct download (if you cannot use Homebrew or Scoop)',
      directLead:
        'Use the table below only when package managers are not an option. Prefer the commands above when you can.',
      documentLink: 'Full install guide — direct download & macOS security'
    },
    downloads: {
      sectionEyebrow: 'Downloads',
      pageTitle: 'Direct download',
      compactTitle: 'Direct download',
      downloadCta: 'Download',
      releasePending: 'Release URL pending',
      placeholderNotice:
        'GitHub Release is not configured. Set `GATSBY_EMPRINT_REPO_URL` (and release URLs) to the correct repository.',
      platforms: {
        'macos-arm64': {
          label: 'macOS Apple Silicon',
          detail: '.pkg installer · M1–M4'
        },
        'macos-x64': {
          label: 'macOS Intel',
          detail: '.pkg installer · Intel x64'
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
        supportCta: 'Emprint through support',
        supportHint: 'Open-source Emprint stays free to install—your tip helps keep releases signed and development sustainable.',
        panelLeft: 'support',
        panelRight: 'where it goes',
        supportLines: [
          '* signing — Apple notarization & trusted macOS installs',
          '* environment — dev hardware and release tooling',
          '* sustain — ongoing fixes without paywalling the app'
        ],
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
            linkTo: '/document/#wizard'
          },
          {
            id: 'flow',
            title: 'Content and design in one flow',
            summary:
              'Move between posting and Implement so what you write and how the page looks grow inside the same working rhythm.',
            linkLabel: 'Content & custom design',
            linkTo: '/document/#workspace'
          },
          {
            id: 'publish',
            title: 'Publishing can reach your live site',
            summary:
              'The goal is an end-to-end path: with a straightforward GitHub sign-in, what you publish can appear on a site that is yours.',
            linkLabel: 'Deployment',
            linkTo: '/document/#publish'
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
        primaryCta: 'Install with Homebrew or Scoop',
        secondaryCta: 'Open document',
        tertiaryCta: 'View source'
      }
    },
    documentPage: {
      eyebrow: 'Document',
      title: 'Emprint—start from the beginning, step by step',
      intro:
        'No coding background is needed. Follow the screens in order: install the app, prepare Node.js and Git, complete the setup wizard, create an anthology, work in the workspace, then publish when ready. Each step below includes a screenshot from the app.',
      sidebarTitle: 'On this page',
      sidebarAriaLabel: 'Documentation',
      navOverview: 'Getting started',
      navNotes: 'Notes',
      notesEyebrow: 'Notes',
      notesTitle: 'About installs and downloads',
      notesBody:
        'Preferred installs use Homebrew or Scoop (see Install). Direct download links point to the emprint-release repository on GitHub. If a link looks out of date, check the home page or release repo for the latest version.',
      sections: documentSectionsEn
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
      footerSupport: '후원으로 Emprint 하기',
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
    install: {
      sectionEyebrow: '설치',
      pageTitle: 'Emprint 설치',
      compactTitle: '설치',
      recommendLead:
        '설치 파일을 직접 받기보다 Homebrew(맥) 또는 Scoop(Windows) 사용을 권장합니다. 패키지 관리자가 설치·업데이트를 더 쉽게 해 줍니다.',
      macTitle: 'macOS (Homebrew)',
      macPrereq: 'Homebrew 필요 — https://brew.sh',
      windowsTitle: 'Windows (Scoop)',
      windowsPrereq: 'Scoop 필요 — https://scoop.sh',
      directTitle: '직접 다운로드 (Homebrew·Scoop을 쓸 수 없을 때)',
      directLead:
        '패키지 관리자를 쓸 수 없을 때만 아래 표를 사용하세요. 가능하면 위 명령을 우선해 주세요.',
      documentLink: '설치 가이드 전체 보기 — 직접 다운로드·맥 보안 안내'
    },
    downloads: {
      sectionEyebrow: '다운로드',
      pageTitle: '직접 다운로드',
      compactTitle: '직접 다운로드',
      downloadCta: '다운로드',
      releasePending: '릴리스 URL 대기',
      placeholderNotice:
        'GitHub Release가 준비되지 않은 환경입니다. `GATSBY_EMPRINT_REPO_URL` 등을 올바른 저장소·릴리스 주소로 설정해 주세요.',
      platforms: {
        'macos-arm64': {
          label: 'macOS Apple Silicon',
          detail: '.pkg installer · M1–M4'
        },
        'macos-x64': {
          label: 'macOS Intel',
          detail: '.pkg installer · Intel x64'
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
        supportCta: '후원으로 Emprint 하기',
        supportHint:
          'Emprint는 오픈소스로 무료 설치입니다. 후원은 배포용 서명과 개발·릴리스 환경을 이어가는 데 쓰입니다.',
        panelLeft: '후원',
        panelRight: '사용처',
        supportLines: [
          '* 서명 — macOS 공증·신뢰할 수 있는 배포',
          '* 환경 — 개발 장비와 릴리스·빌드 도구',
          '* 지속 — 유료 잠금 없이 업데이트 유지'
        ],
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
            linkTo: '/document/#wizard'
          },
          {
            id: 'flow',
            title: '컨텐츠와 디자인을 한 흐름으로',
            summary:
              'Posting과 Implement 사이를 오가며, 같은 작업 루틴 안에서 웹페이지의 디자인과 컨텐츠까지 만들어갈 수 있습니다.',
            linkLabel: 'Contents & Custom Design',
            linkTo: '/document/#workspace'
          },
          {
            id: 'publish',
            title: '발행하면 웹페이지에 반영됩니다.',
            summary:
              'GitHub 로그인만으로 내가 게시한 컨텐츠가 홈페이지가 되어 살아나는 end-to-end 경험을 목표로 합니다.',
            linkLabel: 'Deployment',
            linkTo: '/document/#publish'
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
        primaryCta: 'Homebrew·Scoop으로 설치',
        secondaryCta: '문서 열기',
        tertiaryCta: '소스 보기'
      }
    },
    documentPage: {
      eyebrow: '문서',
      title: 'Emprint, 처음부터 따라하기',
      intro:
        '개발 경험이 없어도 괜찮습니다. 설치 → Node.js·Git 준비 → 설정 마법사 → 앤솔로지 만들기 → 워크스페이스 → 게시 순으로 화면을 따라가면 됩니다. 각 단계에 앱 스크린샷이 붙어 있습니다.',
      sidebarTitle: '목차',
      sidebarAriaLabel: '문서 섹션',
      navOverview: '시작하기',
      navNotes: '노트',
      notesEyebrow: '노트',
      notesTitle: '설치·다운로드 안내',
      notesBody:
        '권장 설치는 Homebrew 또는 Scoop입니다(설치 섹션 참고). 직접 다운로드 링크는 GitHub emprint-release 저장소로 연결됩니다. 링크가 맞지 않으면 홈 또는 릴리스 저장소에서 최신 버전을 확인해 주세요.',
      sections: documentSectionsKo
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
