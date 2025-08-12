import React from 'react'
import '../css/UserProfile.css'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'

const UserProfile = () => {
  return (
    <div className='profile-container'>
      <Searchbar />
      <Sidebar />
      <div className='profile'>
        Users
      </div>
    </div>
  )
}

export default UserProfile