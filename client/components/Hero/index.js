import cx from './index.css'

import React from 'react'
import prefixStyles from 'inline-style-prefixer/static'
import shuffle from 'lodash.shuffle'




const LOGO_TEXT = 'wunderdog'
// const delays = LOGO_TEXT.split('').map((letter, i) => {
//   if ( i === 0 ) return Math.random() * 100
//   return Math.round((Math.random() * 1000 + 500) / 100 ) * 100
// })
const delays = shuffle(LOGO_TEXT.split('').map((_, i) => i * 100 + 500))



const Hero = ({ lineA, lineB }) => (
  <div className={cx['Hero']}>
    <div className={cx['Hero__inner']}>
      <h1 className={cx['Hero__logo']}>
        { LOGO_TEXT.split('').map((letter, i) => (
          <span
            key={ `${letter}-${i}` }
            children={ letter }
            style={ prefixStyles({
              animationDelay: `${ delays[i] }ms`,
            })}
          />
        ))}
      </h1>
      <p className={cx['Hero__content']}>
        <span>{ lineA }</span>
        <span>{ lineB }</span>
      </p>
    </div>
  </div>
)




export default Hero
