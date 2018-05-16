import cx from './index.css'

import React from 'react'
import prefixStyles from 'inline-style-prefixer/static'
import shuffle from 'lodash.shuffle'




const Cases = ({ lineA, lineB }) => (
  <div className={cx['Cases']}>
    <div className={cx['Cases__row']}>
      <div />
      <div />
    </div>
    <div className={cx['Cases__row']}>
      <div />
      <div />
    </div>
  </div>
)




export default Cases
