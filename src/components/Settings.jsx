import React from 'react'
import '../css/Settings.css'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'

const Settings = () => {
  return (
    <div className='settings-container'>
      <Searchbar />
      <Sidebar />
      <div className='settings'>
      Settings
      </div>
    </div>
  )
}

export default Settings
 