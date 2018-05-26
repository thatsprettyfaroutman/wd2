import cx from './index.css'

import React, { Component } from 'react'
import classNames from 'classnames'
import root from 'window-or-global'
import importedComponent from 'react-imported-component'
import { getCssRootValue } from 'Client/utils'
import Article from 'Client/components/Article'

import Content from './content'


class Careers extends Component {
  state = {
    showError: false,
    Content: null
  }

  componentDidMount() {
    if (root.scrollTo) root.scrollTo(0, 0)
    document.body.classList.add('Body--Careers')
  }

  componentWillUnmount() {
    document.body.classList.remove('Body--Careers')
  }


  render() {
    return (
      <Article className="Careers">
        <Content />
      </Article>
    )
  }
}

export default Careers
