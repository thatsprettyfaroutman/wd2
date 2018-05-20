import cx from './index.css'

import React, { Component } from 'react'
import prefixStyles from 'inline-style-prefixer/static'
import shuffle from 'lodash.shuffle'
import classNames from 'classnames'

import CaseCard from 'Client/components/CaseCard'

import image1 from 'Client/assets/case1.png'
import image2 from 'Client/assets/case2.png'
import image3 from 'Client/assets/case3.png'
import image4 from 'Client/assets/case4.png'




class Cases extends Component {
  state = {
    cancelAnimation: false,
  }
  mounted = false

  componentWillMount() {
    this.mounted = true
    if (window) window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    this.mounted = false
    if (window) window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    const { cancelAnimation } = this.state
    if (!this.mounted || cancelAnimation) return
    this.setState({ cancelAnimation: true })
    if (window) window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { cancelAnimation } = this.state

    return (
      <div className={ classNames('Cases', cancelAnimation && 'Cases--cancelAnimation') }>
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






export default Cases
