import './index.css'

import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import root from 'window-or-global'
import { formatPageTitle } from 'Client/utils'
import Hero from 'Client/components/Hero'
import Footer from 'Client/components/Footer'
import Cases from 'Client/components/Cases'
import Header from 'Client/components/Header'
import CtaBox from 'Client/components/CtaBox'
import Button from 'Client/components/Button'
import BlogPosts from 'Client/components/BlogPosts'

class Home extends Component {

  componentDidMount() {
    // if (root.scrollTo) root.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="Home">
        <Helmet>
          <title>{ formatPageTitle('We code and design') }</title>
        </Helmet>
        <Header />
        <Hero />
        <Cases />
        <CtaBox>
          <h1>Join the pack</h1>
          <p>Looking for new opportunities? Check out what challenges Wunderdog has to offer</p>
          <Button to="/careers">Careers</Button>
        </CtaBox>
        <BlogPosts />
        <Footer />
      </div>
    )
  }
}




export default Home
