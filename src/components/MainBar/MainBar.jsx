import React from 'react'
import Posts from '../Posts/Posts'
import Share from '../Share/Share'
import Stories from '../Stories/Stories'

const MainBar = () => {
  return (
    <div className='Home'>
      <Stories />
      <Posts />

    </div>
  )
}

export default MainBar