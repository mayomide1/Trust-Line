import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import text from '../assets/logowithtext.png';
import '../css/Sidebar.css';
import { FaRegFileLines, FaRegUser } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { BiPieChartAlt2, BiSupport, BiLogOut, BiCollapse } from "react-icons/bi";
import { RiStackLine } from "react-icons/ri";
import { BsFolder2Open } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";

const Sidebar = () => {
  const [active, setActive] = useState('Dashboard');
  const [collapsed, setCollapsed] = useState(false); // NEW

  // Load active state from localStorage on mount
  useEffect(() => {
    const savedActive = localStorage.getItem('activeSidebar');
    if (savedActive) {
      setActive(savedActive);
    }

    const savedCollapsed = localStorage.getItem('collapsedSidebar');
    if (savedCollapsed) {
      setCollapsed(JSON.parse(savedCollapsed));
    }
  }, []);

  function handleClick(label) {
    setActive(label);
    localStorage.setItem('activeSidebar', label);
  }

  function toggleCollapse() {
    setCollapsed(prev => {
      const newValue = !prev;
      localStorage.setItem('collapsedSidebar', JSON.stringify(newValue));
      return newValue;
    });
  }

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className='sidebar-top'>
        <Link to="/" className='link'>
          {!collapsed && <img src={text} alt='logo' className="logo-text" />}
        </Link>

        <div className='nav-buttons'>
          <Link to="/dashboard" className='link'>
            <button
              className={active === 'Dashboard' ? 'active' : ''}
              onClick={() => handleClick('Dashboard')}>
              <RxDashboard size={25} /> {!collapsed && 'Dashboard'}
            </button>
          </Link>
          <Link to="/reports" className='link'>
            <button
              className={active === 'Reports' ? 'active' : ''}
              onClick={() => handleClick('Reports')}>
              <FaRegFileLines size={25} /> {!collapsed && 'Reports'}
            </button>
          </Link>
          <Link to="/incidents" className='link'>
            <button
              className={active === 'Incidents' ? 'active' : ''}
              onClick={() => handleClick('Incidents')}>
              <BsFolder2Open size={25} /> {!collapsed && 'Incidents'}
            </button>
          </Link>
          <Link to="/users" className='link'>
            <button
              className={active === 'Users' ? 'active' : ''}
              onClick={() => handleClick('Users')}>
              <FaRegUser size={25} /> {!collapsed && 'Users'}
            </button>
          </Link>
          <Link to="/resources" className='link'>
            <button
              className={active === 'Resources' ? 'active' : ''}
              onClick={() => handleClick('Resources')}>
              <RiStackLine size={25} /> {!collapsed && 'Resources'}
            </button>
          </Link>
          <Link to="/analytics" className='link'>
            <button
              className={active === 'Analytics' ? 'active' : ''}
              onClick={() => handleClick('Analytics')}>
              <BiPieChartAlt2 size={25} /> {!collapsed && 'Analytics'}
            </button>
          </Link>
          <Link to="/zen" className='link'>
            <button
              className={active === 'Zen' ? 'active' : ''}
              onClick={() => handleClick('Zen')}>
              <FaHandHoldingHeart size={25}/> {!collapsed && 'Zen'}
            </button>
          </Link>
          <Link to="/support" className='link'>
            <button
              className={active === 'Support' ? 'active' : ''}
              onClick={() => handleClick('Support')}>
              <BiSupport size={25} /> {!collapsed && 'Support'}
            </button>
          </Link>
        </div>
      </div>

      <div className='sidebar-bottom'>
        <Link to="/settings" className='link'>
          <button
            className={active === 'Settings' ? 'active' : ''}
            onClick={() => handleClick('Settings')}>
            <BiCollapse size={25} /> {!collapsed && 'Settings'}
          </button>
        </Link>
        <Link to="/login" className='link'>
          <button className='logout'><BiLogOut /> {!collapsed && 'Logout'}</button>
        </Link>
        <button onClick={toggleCollapse}>
          <BiCollapse size={20} /> {!collapsed && 'Collapse'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
