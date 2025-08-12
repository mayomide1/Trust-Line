import React from 'react'
import '../css/Analytics.css'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'

const Analytics = () => {
  return (
    <div className='analytics-container'>
      <Searchbar />
      <div className='analytics'>
        Analytics
      </div>
      <Sidebar />
    </div>
  )
}

export default Analytics 