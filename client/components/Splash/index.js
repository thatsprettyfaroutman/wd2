import cx from './index.css'

import React, { Component } from 'react'
import classNames from 'classnames'
import root from 'window-or-global'
import noop from 'lodash.noop'
import withState from 'Client/redux/withState'
import { getCssRootValue } from 'Client/utils'
import Logo from 'Client/components/Logo'


const scrollTo = root.scrollTo || noop


class Splash extends Component {
  static defaultProps = {
    setSplashShowing: noop,
  }

  state = {
    hide: false,
    remove: false,
  }
  mounted = false
  hideTimeout = null

  componentDidMount() {
    const splashDelay = parseInt(getCssRootValue('--splash-delay') || 2000, 10)
    this.mounted = true
    this.hideTimeout = setTimeout(this.hide, splashDelay)
    document.body.style.overflow = 'hidden'
    this.props.setSplashShowing(true)
  }

  componentWillUnmount() {
    this.mounted = false
    this.props.setSplashShowing(false)
  }

  hide = () => {
    const { setSplashShowing } = this.props
    const splashFadeDuration =
      parseInt(getCssRootValue('--splash-fade-duration') || 1000, 10)

    if ( this.mounted ) {
      this.setState({ hide: true })
    }

    setTimeout(() => {
      if ( this.mounted ) {
        this.setState({ remove: true })
      }
      setSplashShowing(false)
    }, splashFadeDuration + 200)

    document.body.style.overflow = ''
    clearTimeout(this.hideTimeout)
    scrollTo(0, 0)
  }

  render() {
    const { remove, hide } = this.state
    if ( remove ) return null
    return (
      <div
        className={ classNames('Splash', hide && 'Splash--hide') }
        onClick={ this.hide }
      >
        <Logo
          className="Splash__logo"
          animate
        />
      </div>
    )
  }
}




export default withState( Splash )
