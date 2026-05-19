import * as React from 'react'
import { Link } from 'gatsby'
import { brewCommands, scoopCommands } from '../data/install-commands'
import { useLocale } from '../context/locale-context'
import { hrefWithPrefix } from '../utils/href-with-prefix'
import DownloadGrid from './download-grid'

function CommandBlock({ title, lines }) {
  return (
    <div className="install-block">
      <h3 className="install-block__title">{title}</h3>
      <pre className="install-code">
        <code>{lines.join('\n')}</code>
      </pre>
    </div>
  )
}

function InstallCommands() {
  const { messages } = useLocale()
  const i = messages.install

  return (
    <div className="install-blocks">
      <CommandBlock title={i.macTitle} lines={brewCommands} />
      <p className="install-panel__note">{i.macPrereq}</p>
      <CommandBlock title={i.windowsTitle} lines={scoopCommands} />
      <p className="install-panel__note">{i.windowsPrereq}</p>
    </div>
  )
}

export default function InstallGuide({
  compact = false,
  showDirectDownloads = false,
  showHeader = true,
  showLead = true,
  sectionId = 'install'
}) {
  const { messages } = useLocale()
  const i = messages.install
  const title = compact ? i.compactTitle : i.pageTitle

  const inner = (
    <>
      {showHeader ? (
        <div className="section-heading">
          <span className="section-heading__eyebrow">{i.sectionEyebrow}</span>
          <h2>{title}</h2>
        </div>
      ) : null}
      {showLead ? <p className="install-panel__lead">{i.recommendLead}</p> : null}
      <InstallCommands />
      {showDirectDownloads ? (
        <div className="install-panel__direct" id="direct-downloads">
          <h3 className="install-panel__direct-title">{i.directTitle}</h3>
          <p className="install-panel__direct-lead">{i.directLead}</p>
          <DownloadGrid embedded />
        </div>
      ) : (
        <p className="install-panel__more">
          <Link to={hrefWithPrefix('/document/#install')}>{i.documentLink}</Link>
        </p>
      )}
    </>
  )

  if (!showHeader && !sectionId) {
    return <div className="install-panel__content">{inner}</div>
  }

  return (
    <section
      className={`install-panel release-panel ${compact ? 'release-panel--compact install-panel--compact' : ''}`}
      id={sectionId || undefined}
    >
      {inner}
    </section>
  )
}

export { InstallCommands }
