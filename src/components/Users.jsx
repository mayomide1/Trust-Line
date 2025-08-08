import React from 'react'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'

const Users = () => {
  return (
    <div className='users-container'>
      <Searchbar />
      <div className='users'>
        Users
      </div>
      <Sidebar />
    </div>
  )
}

export default Users 