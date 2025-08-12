import React from 'react'
import '../css/Notification.css'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'

const Notification = () => {
  return (
    <div className='notification-container'>
      <Searchbar />
      <Sidebar />
      <div className='notification'>
        Users
      </div>
    </div>
  )
}

export default Notification