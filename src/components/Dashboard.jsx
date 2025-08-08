import React from 'react'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <Searchbar />
      <div className='dashboard'>
      <h1>Dashboard</h1>
      </div>
      <Sidebar />
    </div>
  )
}

export default Dashboard 