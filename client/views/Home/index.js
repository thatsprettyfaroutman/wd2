import './index.css'

import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import root from 'window-or-global'
import Hero from 'Client/components/Hero'
import Footer from 'Client/components/Footer'
import Cases from 'Client/components/Cases'
import Header from 'Client/components/Header'
import CtaBox from 'Client/components/CtaBox'
import Button from 'Client/components/Button'

class HelloWorld extends Component {

  componentDidMount() {
    // if (root.scrollTo) root.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="Home">
        <Header />
        <Hero />
        <Cases />
        <CtaBox>
          <h1>Join the pack</h1>
          <p>Looking for new opportunities? Check out what challenges Wunderdog has to offer</p>
          <Button to="/careers">Careers</Button>
        </CtaBox>
        <Footer />
      </div>
    )
  }
}




export default HelloWorld
