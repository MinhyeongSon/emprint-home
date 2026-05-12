import * as React from 'react'
import Layout from '../components/layout'
import DownloadGrid from '../components/download-grid'
import Seo from '../components/seo'
import siteData from '../data/site'

export default function DocumentPage({ location }) {
  return (
    <Layout currentPath={location.pathname}>
      <section className="section-block section-block--tight">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Document</span>
          <h1>Emprint 사용 흐름</h1>
          <p>
            이 페이지는 현재 `emprint` 앱의 README, proposal, agent brief, GitHub Pages 로드맵을 기반으로
            초기 사용 흐름을 정리한 문서입니다.
          </p>
        </div>
      </section>

      <DownloadGrid compact title="Installer Matrix" />

      <section className="document-grid">
        {siteData.docsSections.map((section, index) => (
          <article className="panel document-card" key={section.title}>
            <div className="document-card__index">{String(index + 1).padStart(2, '0')}</div>
            <h2>{section.title}</h2>
            <p>{section.summary}</p>
            <ul className="document-list">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section-block section-block--narrow">
        <div className="panel notes-card">
          <span className="section-heading__eyebrow">Notes</span>
          <h2>릴리스와 저장소 연결</h2>
          <p>
            이 사이트는 `emprint-home` 저장소에서 GitHub Pages로 배포되지만, 설치 버튼은 `emprint` 앱 저장소의
            Releases를 가리키도록 설계했습니다. 저장소 이름이나 릴리스 태그가 바뀌면 `src/data/site.js` 또는
            Actions variables도 함께 수정해 주세요.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export function Head() {
  return (
    <Seo
      title="Document"
      description="Usage notes, install guidance, and publishing flow for the Emprint desktop app."
      pathname="/document/"
    />
  )
}
