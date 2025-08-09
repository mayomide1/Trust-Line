import React from 'react'
import spongebob from '../assets/spongebob.png'
import '../css/Searchbar.css'
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

const Searchbar = () => {
  return (
    <div className='searchbar'>
    <div className='search'>
        <input type='text' placeholder='Search' />
        <div className='search-icon'><CiSearch size={30}/></div>
    </div>
    <div className='searchbar-right'>
        <div className='notification-icon'><IoMdNotificationsOutline size={30}/></div>
        <img src={spongebob} alt='image' />
    </div>
    </div>
  )
}

export default Searchbar