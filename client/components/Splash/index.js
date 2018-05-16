import cx from './index.css'

import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'
import prefixStyles from 'inline-style-prefixer/static'
import { getCssRootValue } from 'Client/utils'




const LOGO_TEXT = 'wunderdog'
const DELAYS = shuffle(LOGO_TEXT.split('').map((_, i) => i * 100 + 500))



class Splash extends Component {
  state = {
    clickThrough: false,
    remove: false,
  }
  mounted = false

  componentDidMount() {
    const splashFadeDuration =
      parseInt(getCssRootValue('--splash-fade-duration') || 800, 10)

    const splashDelay =
      parseInt(getCssRootValue('--splash-delay') || 2000, 10)

    this.mounted = true

    setTimeout(() => {
      if (this.mounted) this.setState({ clickThrough: true })
    }, splashDelay)

    setTimeout(() => {
      if (this.mounted) this.setState({ remove: true })
    }, splashFadeDuration + splashDelay + 200)
  }

  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    const { clickThrough, remove } = this.state
    if ( remove ) return null
    return (
      <div
        className={cx['Splash']}
        style={ clickThrough ?
           prefixStyles({ pointerEvents: 'none' }) :
           null
         }
      >
        <span>
          { LOGO_TEXT.split('').map((letter, i) => (
            <span
              key={ `${letter}-${i}` }
              children={ letter }
              style={ prefixStyles({
                animationDelay: `${ DELAYS[i] }ms`,
              })}
            />
          ))}
        </span>
      </div>
    )
  }
}




export default Splash
