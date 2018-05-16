import './index.css'

import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Hero from 'Client/components/Hero'
import Cases from 'Client/components/Cases'

class HelloWorld extends Component {
  render() {
    return (
      <Fragment>
        <Hero
          lineA="we code and design"
          lineB="all things digital"
        />
        <Cases />
      </Fragment>
    )
  }
}




export default HelloWorld
