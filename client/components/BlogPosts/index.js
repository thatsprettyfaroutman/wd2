import './index.css'
import React from 'react'
import withState from 'Client/redux/withState'




const BlogPosts = ({ blogPosts }) => (
  <div className="BlogPosts">
    { [ ...blogPosts ].splice(0, 2).map(entry => (
      <a href={ entry.link } target="_blank" key={ entry.guid }>
        <span style={{ backgroundImage: `url(${ entry.image })` }} />
        <span>Blog</span>
        <span>{ entry.title }</span>
      </a>
    ))}
  </div>
)




export default withState( BlogPosts )
