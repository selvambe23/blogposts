import React, { ReactNode, Component, PureComponent } from 'react'

export type Props = {
  children: {
    header?: ReactNode
    media?: ReactNode
    content: ReactNode
    actions?: ReactNode
  }
}
export class Card extends Component<Props> {
  render() {
    console.count('Card render')
    const { header, content, media, actions } = this.props.children

    return (
      <div className="card">
        {header ? <div className="card-header">{header}</div> : null}
        {media ? <div className="card-media">{media}</div> : null}
        <div className="card-content">{content}</div>
        {actions ? <div className="card-actions">{actions}</div> : null}
      </div>
    )
  }
}
