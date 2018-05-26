import './index.css'

import React from 'react'
import classNames from 'classnames'




const Article = ({ className, ...rest }) => (
  <article { ...rest }
    className={ classNames('Article', className) }
  />
)




export default Article
