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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1, minimum-scale=1.0, maximum-scale=2.0, shrink-to-fit=no" />
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
