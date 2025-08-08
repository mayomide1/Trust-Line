import React from 'react'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'

const Incidents = () => {
  return (
    <div className='incidents-container'>
      <Searchbar />
      <div className='incidents'>
      Incidents
      </div>
      <Sidebar />
    </div>
  )
}

export default Incidents 