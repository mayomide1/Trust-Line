import React from 'react'
import '../css/Users.css'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'

const Users = () => {
  return (
    <div className='users-container'>
      <Searchbar />
      <Sidebar />
      <div className='users'>
        Users
      </div>
    </div>
  )
}

export default Users 