import cx from './index.css'

import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { getCssRootValue } from 'Client/utils'

class CaseCard extends Component {


  handleClick = e => {
    const { history, to } = this.props
    e.preventDefault()

    const effectDuration =
      parseInt(getCssRootValue('--card-effect-duration') || 1000, 10)

    const effectRef = document.createElement('div')
    effectRef.classList.add('CaseCard__effect')
    document.body.appendChild(effectRef)

    setTimeout(() => {
      history.push(to)
    }, effectDuration / 2)

    setTimeout(() => {
      effectRef.remove()
    }, effectDuration)
  }

  render () {
    const {
      title,
      clientName,
      image,
      to = '#',
    } = this.props
    return (
      <Link
        to={ to }
        className="CaseCard"
        onClick={ this.handleClick }
      >
        <img src={ image } alt={ title } />
        <span>{ title }</span>
        <span>{ clientName }</span>
      </Link>
    )
  }
}




export default withRouter( CaseCard )
