import cx from './index.css'

import React from 'react'
import Logo from 'Client/components/Logo'




const Header = () => (
  <header className={ cx['Header'] }>
    <Logo
      className={ cx['Header__logo'] }
      useDefault
    />
  </header>
)




export default Header
