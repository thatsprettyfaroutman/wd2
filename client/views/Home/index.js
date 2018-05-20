import './index.css'

import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import root from 'window-or-global'
import Hero from 'Client/components/Hero'
import Cases from 'Client/components/Cases'
import Header from 'Client/components/Header'

class HelloWorld extends Component {

  componentWillMount() {
    root.scrollTo(0, 0)
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Hero
          text="We code and design"
        />
        <Cases />
      </Fragment>
    )
  }
}




export default HelloWorld
