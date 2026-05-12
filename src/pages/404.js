import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

export default function NotFoundPage({ location }) {
  return (
    <Layout currentPath={location.pathname}>
      <section className="section-block section-block--narrow">
        <div className="panel not-found-card">
          <span className="section-heading__eyebrow">404</span>
          <h1>페이지를 찾을 수 없습니다.</h1>
          <p>찾으시던 문서는 현재 경로에 없습니다. 메인 페이지나 Document 메뉴에서 다시 시작해 주세요.</p>
          <div className="button-row">
            <Link className="button" to="/">
              Go to Main
            </Link>
            <Link className="button button--secondary" to="/document/">
              Open Document
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export function Head() {
  return <Seo title="404" description="Emprint page not found." pathname="/404/" />
}
