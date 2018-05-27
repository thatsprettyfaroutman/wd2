import React from 'react'
import { connect } from 'react-redux'
import throttle from 'lodash.throttle'
import {
  setSplashShowing,
  getBlogPosts,
} from './actions'




//------------------------------------------------------------------------------
// Maps
//------------------------------------------------------------------------------

const mapStateToProps = state => ({
  splashShowing: state.splashShowing,
  blogPosts: state.blogPosts,
})

const mapDispatchToProps = dispatch => ({
  setSplashShowing: (...params) => dispatch(setSplashShowing(...params)),
  getBlogPosts: (...params) => dispatch(getBlogPosts(...params)),
})




//------------------------------------------------------------------------------
// Hoc
//------------------------------------------------------------------------------

export default Component => {
  const EnhancedComponent = props => <Component {...props} />
  return connect(mapStateToProps, mapDispatchToProps)(EnhancedComponent)
}
