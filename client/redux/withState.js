import React from 'react'
import { connect } from 'react-redux'
import throttle from 'lodash.throttle'
import {
  setSplashShowing,
} from './actions'




//------------------------------------------------------------------------------
// Maps
//------------------------------------------------------------------------------

const mapStateToProps = state => ({
  splashShowing: state.splashShowing,
})

const mapDispatchToProps = dispatch => ({
  setSplashShowing: (...params) => dispatch(setSplashShowing(...params)),
})




//------------------------------------------------------------------------------
// Hoc
//------------------------------------------------------------------------------

export default Component => {
  const EnhancedComponent = props => <Component {...props} />
  return connect(mapStateToProps, mapDispatchToProps)(EnhancedComponent)
}
