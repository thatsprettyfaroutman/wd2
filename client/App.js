// Main component of our application.
// We setup react-helmet, which let us nicely manage our <head />
// It's a nice library you should use!

import 'babel-polyfill'
import './App.css'

import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getBlogPosts } from 'Client/redux/actions'
import store, { dispatch } from 'Client/redux/store'

import Splash from 'Client/components/Splash'
import Home from 'Client/views/Home'
import Case from 'Client/views/Case'
import Careers from 'Client/views/Careers'
import 'Client/api'




// Get blogposts
dispatch( getBlogPosts() )




export default function App() {
  return (
    <Fragment>
      <Helmet defaultTitle="Wunderdog">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1, minimum-scale=1.0, maximum-scale=2.0, shrink-to-fit=no" />
      </Helmet>
      <Provider store={ store }>
        <Fragment>
          <Splash />
          <Switch>
            <Route exact path="/case/:contentId" component={ Case } />
            <Route exact path="/careers/" component={ Careers } />
            <Route exact path="/" component={ Home } />
            <Redirect to="/" />
          </Switch>
        </Fragment>
      </Provider>
    </Fragment>
  )
}
