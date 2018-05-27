import './index.css'

import React from 'react'
import AwesomeLink from 'Client/components/AwesomeLink'

const CaseCard = ({ title, clientName, image, to = '#' }) => (
  <AwesomeLink to={ to } className="CaseCard">
    <img src={ image } alt={ title } />
    <span>{ title }</span>
    <span>{ clientName }</span>
  </AwesomeLink>
)

export default CaseCard
