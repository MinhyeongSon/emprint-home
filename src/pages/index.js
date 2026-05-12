import * as React from 'react'
import { Link, withPrefix } from 'gatsby'
import DownloadGrid from '../components/download-grid'
import Layout from '../components/layout'
import Seo from '../components/seo'
import siteData from '../data/site'

export default function IndexPage({ location }) {
  const logoSrc = withPrefix('/assets/images/emprint-logo.svg')

  return (
    <Layout currentPath={location.pathname}>
      <section className="hero">
        <div className="hero__copy">
          <div className="hero-mark" aria-hidden="true">
            <span className="hero-mark__prompt">&gt;</span>
            <span className="hero-mark__cursor">_</span>
          </div>
          <div className="badge-row">
            {siteData.heroBadges.map((badge) => (
              <span className="pill" key={badge}>
                {badge}
              </span>
            ))}
          </div>
          <h1>Emprint keeps your writing, code, and publishing trail in one warm workspace.</h1>
          <p className="hero__lede">
            Emprint는 local-first, Git-native 철학 위에 놓인 데스크톱 워크스페이스입니다. Markdown과 Git을
            그대로 유지한 채 글을 쓰고, 코드를 수정하고, GitHub Pages까지 이어지는 흐름을 정리합니다.
          </p>
          <div className="button-row">
            <a className="button" href="#downloads">
              Install Emprint
            </a>
            <Link className="button button--secondary" to="/document/">
              Open Document
            </Link>
            <a
              className="button button--ghost"
              href={siteData.githubRepoUrl}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>
          <p className="hero__meta">
            Current release reference: <strong>{siteData.currentVersion}</strong>
          </p>
        </div>

        <div className="hero__panel panel">
          <img className="hero__logo" src={logoSrc} alt="Emprint wordmark" />
          <p className="hero__quote">“This workspace preserves the evolution of my thinking.”</p>
          <div className="console-card">
            <div className="console-card__header">
              <span>workspace structure</span>
              <span>portable by design</span>
            </div>
            <pre>{siteData.directoryTree.join('\n')}</pre>
          </div>
          <div className="keyword-row">
            {siteData.brandKeywords.map((keyword) => (
              <span className="keyword" key={keyword}>
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Why Emprint</span>
          <h2>Quiet intelligence for portable creative work.</h2>
          <p>
            `emprint` 프로젝트의 README, 디자인 문서, 워크플로 설명을 바탕으로 이 소개 페이지를 구성했습니다.
            톤은 warm 테마를 유지하면서도 설치와 배포 동선을 한 화면 안에서 빠르게 파악할 수 있게 정리했습니다.
          </p>
        </div>
        <div className="feature-grid">
          {siteData.principles.map((item) => (
            <article className="panel feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <DownloadGrid />

      <section className="section-block">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Workflow</span>
          <h2>Install, connect, write, publish.</h2>
        </div>
        <div className="workflow-grid">
          {siteData.workflow.map((item) => (
            <article className="panel workflow-card" key={item.step}>
              <div className="workflow-card__step">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block section-block--narrow">
        <div className="panel repo-card">
          <div>
            <span className="section-heading__eyebrow">Repository</span>
            <h2>Follow the app project itself.</h2>
            <p>
              Emprint의 실제 앱 저장소 링크는 상단 `GitHub` 메뉴와 아래 버튼에서 연결됩니다. 아직 placeholder URL이
              들어가 있다면 `src/data/site.js`에서 실제 주소로 바꿔 주세요.
            </p>
          </div>
          <a className="button" href={siteData.githubRepoUrl} target="_blank" rel="noreferrer">
            Open repository
          </a>
        </div>
      </section>
    </Layout>
  )
}

export function Head() {
  return (
    <Seo
      title="Main"
      description="Emprint landing page with install links, workflow overview, and GitHub Pages-ready onboarding."
      pathname="/"
    />
  )
}
