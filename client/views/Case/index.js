import cx from './index.css'

import React, { Component } from 'react'
import classNames from 'classnames'
import importedComponent from 'react-imported-component'
import root from 'window-or-global'
import Article from 'Client/components/Article'
import Footer from 'Client/components/Footer'




const contentMap = {
  kisapahkina: importedComponent(() => import('./contents/kisapahkina')),
}




class Case extends Component {
  state = {
    showError: false,
    Content: null
  }

  componentDidMount() {
    this.loadContent()
    if (root.scrollTo) root.scrollTo(0, 0)
  }


  loadContent = () => {
    const { match } = this.props
    const contentId = (
      match
      && match.params
      && match.params.contentId
      && match.params.contentId.toLowerCase()
    )

    const Content = contentMap[contentId]
    if ( !Content ) return this.setState({ showError: true })
    this.setState({ Content })
  }

  render() {
    const { Content, showError } = this.state

    if ( showError ) return (
      <div className="Case Case--error">error</div>
    )

    if ( !Content ) return (
      <div className="Case Case--loading">loading</div>
    )

    return (
      <Article className="Case">
        <Content />
        <Footer />
      </Article>
    )
  }
}

export default Case
