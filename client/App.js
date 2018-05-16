// Main component of our application.
// We setup react-helmet, which let us nicely manage our <head />
// It's a nice library you should use!

import 'babel-polyfill'

import cx from './App.css'

import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route, Redirect } from 'react-router-dom'

import Splash from './components/Splash'

import Home from './views/Home'
import Case from './views/Case'

export default function App() {
  return (
    <Fragment>
      <Helmet defaultTitle="Wunderdog">
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
      </Helmet>
      <Splash />
      <Switch>
        <Route exact path="/case/:contentId" component={ Case } />
        <Route exact path="/" component={ Home } />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  )
}
