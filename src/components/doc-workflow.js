import * as React from 'react'
import { withPrefix } from 'gatsby'

export default function DocWorkflow({ steps }) {
  if (!steps?.length) return null

  return (
    <div className="doc-workflow">
      {steps.map((step, index) => (
        <figure key={step.id} className="doc-workflow__step">
          <div className="doc-workflow__meta">
            <span className="doc-workflow__index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="doc-workflow__title">{step.title}</h3>
            <p className="doc-workflow__body">{step.body}</p>
          </div>
          <img
            className="doc-workflow__shot"
            src={withPrefix(`/assets/images/workflow/${step.image}`)}
            alt={step.alt ?? step.title}
            loading="lazy"
            decoding="async"
          />
        </figure>
      ))}
    </div>
  )
}
