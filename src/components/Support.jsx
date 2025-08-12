import React from 'react'
import '../css/Support.css'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'

const Support = () => {
  return (
    <div className='support-container'>
      <Searchbar />
      <Sidebar />
      <div className='support'>
      Support
      </div>

    </div>
  )
}

export default Support 