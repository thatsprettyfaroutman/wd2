import cx from './index.css'

import React, { Component } from 'react'
import classNames from 'classnames'
import root from 'window-or-global'
import importedComponent from 'react-imported-component'
import { getCssRootValue } from 'Client/utils'
import Article from 'Client/components/Article'







class Careers extends Component {
  state = {
    showError: false,
    Content: null
  }

  componentDidMount() {
    this.loadContent()
    if (root.scrollTo) root.scrollTo(0, 0)
    document.body.classList.add('Body--Careers')
  }

  componentWillUnmount() {
    document.body.classList.remove('Body--Careers')
  }

  loadContent = () => {
    const Content = importedComponent(() => import('./content.js'))
    if ( !Content ) return this.setState({ showError: true })
    this.setState({ Content })
  }

  render() {
    const { Content, showError } = this.state

    if ( showError ) return (
      <div className="Careers Careers--error">error</div>
    )

    if ( !Content ) return (
      <div className="Careers Careers--loading">loading</div>
    )

    return (
      <Article className="Careers">
        <Content />
      </Article>
    )
  }
}

export default Careers
