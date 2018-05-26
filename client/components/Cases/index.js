import cx from './index.css'

import React, { Component } from 'react'
import prefixStyles from 'inline-style-prefixer/static'
import noop from 'lodash.noop'
import classNames from 'classnames'
import root from 'window-or-global'
import { getCssRootValue } from 'Client/utils'
import withState from 'Client/redux/withState'

import CaseCard from 'Client/components/CaseCard'

import image1 from 'Client/assets/case1.png'
import image2 from 'Client/assets/case2.png'
import image3 from 'Client/assets/case3.png'
import image4 from 'Client/assets/case4.png'


const addEventListener = root.addEventListener || noop
const removeEventListener = root.removeEventListener || noop


class Cases extends Component {
  state = {
    nudge: false,
    nudgeInstant: false,
  }
  cancelAnimation = false
  mounted = false
  nudgeTimeout = null

  componentDidMount() {
    this.mounted = true
    addEventListener('scroll', this.handleScroll)
    if ( !this.props.splashShowing ) {
      this.setState({ nudgeInstant: true, nudge: true })
    }
  }

  componentWillUnmount() {
    this.mounted = false
    removeEventListener('scroll', this.handleScroll)
  }

  componentWillReceiveProps(nextProps) {
    if ( !nextProps.splashShowing ) {
      this.maybeNudge()
    }
  }

  handleScroll = e => {
    this.cancelAnimation = true
    removeEventListener('scroll', this.handleScroll)
  }

  maybeNudge = () => {
    clearTimeout(this.nudgeTimeout)
    this.nudgeTimeout = setTimeout(() => {
      if ( !this.cancelAnimation ) {
        this.setState({ nudge: true })
      }
      removeEventListener('scroll', this.handleScroll)
    }, 800)
  }

  render() {
    const { nudge, nudgeInstant } = this.state

    return (
      <div className={ classNames(
        'Cases',
        nudge && 'Cases--nudge',
        nudgeInstant && 'Cases--nudgeInstant'
      ) }>
        <div className="Cases__row">
          <CaseCard
            title="Online Healthcare Comparison Tool"
            clientName="Lääkärinhinta.fi"
            image={ image1 }
            to="/case/laakarinhinta"
          />
          <CaseCard
            title="Digital Concept for a Multichannel Drama production"
            clientName="Yle"
            image={ image2 }
            to="/case/hasbeen"
          />
        </div>
        <div className="Cases__row">
          <CaseCard
            title="Kisapähkinä - Nettivisa"
            clientName="Yle"
            image={ image3 }
            to="/case/kisapahkina"
          />
          <CaseCard
            title="Cool life"
            clientName="Some random company"
            image={ image4 }
            to="/case/cool"
          />
        </div>
      </div>
    )
  }

}




export default withState( Cases )
