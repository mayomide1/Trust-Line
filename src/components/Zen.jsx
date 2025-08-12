import React from 'react'
import '../css/Zen.css'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'

const Zen = () => {
  return (
    <div className='zen-container'>
      <Searchbar />
      <Sidebar />
      <div className='zen'>
      Zen
      </div>
    </div>
  )
}

export default Zen 