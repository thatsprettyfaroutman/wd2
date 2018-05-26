import './index.css'

import React, { Component } from 'react'

class ContactInfoCard extends Component {
  render () {
    const {
      title,
      image,
      children,
    } = this.props
    return (
      <div className="ContactInfoCard">
        <img src={ image } alt={ title } />
        <h3>{ title }</h3>
        { children }
      </div>
    )
  }
}

export default ContactInfoCard
