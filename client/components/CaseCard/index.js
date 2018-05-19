import cx from './index.css'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CaseCard extends Component {




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
      >
        <img src={ image } alt={ title } />
        <span>{ title }</span>
        <span>{ clientName }</span>
      </Link>
    )
  }
}




export default CaseCard
