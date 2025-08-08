import React from 'react'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'

const Zen = () => {
  return (
    <div className='zen-container'>
      <Searchbar />
      <div className='zen'>
      Zen
      </div>
      <Sidebar />
    </div>
  )
}

export default Zen 