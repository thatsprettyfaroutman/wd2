import cx from './index.css'

import React, { Component } from 'react'
import classNames from 'classnames'


class FullImage extends Component {
  state = {
    loaded: false,
  }
  mounted = false

  componentDidMount() {
    this.mounted = true
    if ( !this.props.animate ) return

    const loader = new Image()
    loader.src = this.props.src
    loader.onload = loader.onerror = () => {
      if (this.mounted) this.setState({ loaded: true })
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    const { src, animate } = this.props
    const { loaded } = this.state

    return (
      <div
        className={ classNames(
          'FullImage',
          animate && 'FullImage--animate',
          loaded && 'FullImage--loaded'
        )}
        style={{
          backgroundImage: `url(${ src })`
        }}
      />
    )
  }
}

export default FullImage
