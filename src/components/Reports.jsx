import React from 'react'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'

const Reports = () => {
  return (
    <div className='reports-container'>
      <Searchbar />
      <div className='reports'>
    Reports
      </div>
      <Sidebar />
    </div>
  )
}

export default Reports 