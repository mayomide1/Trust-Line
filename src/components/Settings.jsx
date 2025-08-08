import React from 'react'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'

const Settings = () => {
  return (
    <div className='settings-container'>
      <Searchbar />
      <div className='settings'>
      Settings
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings
 