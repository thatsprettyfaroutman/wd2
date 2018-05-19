import cx from './index.css'

import React from 'react'
import prefixStyles from 'inline-style-prefixer/static'
import shuffle from 'lodash.shuffle'
import CaseCard from 'Client/components/CaseCard'

import image1 from 'Client/assets/case1.png'
import image2 from 'Client/assets/case2.png'
import image3 from 'Client/assets/case3.png'
import image4 from 'Client/assets/case4.png'



const Cases = ({ lineA, lineB }) => (
  <div className={cx['Cases']}>
    <div className={cx['Cases__row']}>
      <CaseCard
        title="Online Healthcare Comparison Tool"
        clientName="Lääkärinhinta.fi"
        image={ image1 }
        to="/cases/laakarinhinta"
      />
      <CaseCard
        title="Online Healthcare Comparison Tool"
        clientName="Lääkärinhinta.fi"
        image={ image2 }
        to="/cases/laakarinhinta"
      />
    </div>
    <div className={cx['Cases__row']}>
      <CaseCard
        title="Online Healthcare Comparison Tool"
        clientName="Lääkärinhinta.fi"
        image={ image3 }
        to="/cases/laakarinhinta"
      />
      <CaseCard
        title="Online Healthcare Comparison Tool"
        clientName="Lääkärinhinta.fi"
        image={ image4 }
        to="/cases/laakarinhinta"
      />
    </div>
  </div>
)




export default Cases
