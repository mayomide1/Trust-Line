import React from 'react'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'
import '../css/Dashboard.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";

import graph1 from '../assets/graph1.png'
import graph2 from '../assets/graph2.png'
import aina from '../assets/aina.png'
import wade from '../assets/wade.png'
import piechart1 from '../assets/piechart1.png'
import piechart2 from '../assets/piechart2.png'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <Sidebar />
      <Searchbar />

      <div className='dashboard'>

      <div className='first-section'>
      <div className='heading'>
        <p>Dashboard</p>
        <p>Filter</p>
      </div>
      <div className='cards'>
      <Dashboardcard 
      text="new users"
      number="20"
      percent="+15"
      image={graph1}
      color="#48C9B0"
      bgcolor="#48C9B01A"
      />
      <Dashboardcard 
      text="new reports"
      number="17"
      percent="-0.15"
      image={graph2}
      color="#FF0909"
      bgcolor="#FF09091A"
      />
      <Dashboardcard 
      text="total users"
      number="205"
      percent="+15"
      image={graph1}
      color="#48C9B0"
      bgcolor="#48C9B01A"
      />
      <Dashboardcard 
      text="total reports"
      number="317"
      percent="+15"
      image={graph1}
      color="#48C9B0"
      bgcolor="#48C9B01A"
      />
      </div>
      </div>

      <div className='middle-section'>
      <div className="users-section">
      <div className="users-head">
        <div className='left'>
          <p>Users</p>
          <p>See recent user activities</p>
        </div>
      <button className='see-all'>See All <FaArrowRightLong/></button>
      </div>

      <div className='users-body'>
        <table>
          <thead className='thead'>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Last Login</th>
              <th>Cases</th>
            </tr>
          </thead>
          <tbody>
          <UsersList 
            image={wade}
            name="Modupe Aina"
            type="Victim"
            lastlogin="Today"
            cases="2"
          />
          <UsersList 
            image={aina}
            name="Jane Doe"
            type="Witness"
            lastlogin="Today"
            cases="1"
          />
          <UsersList 
            image={wade}
            name="Wade Warren"
            type="Witness"
            lastlogin="Yesterday"
            cases="4"
          />
            <UsersList 
            image={aina}
            name="Jenny Wilson"
            type="Victim"
            lastlogin="Yesterday"
            cases="1"
          />
          </tbody>
        </table>
      </div>
      </div>
      <div className='zen-section'>
        <div className='zen-head'>
        <p>Zen Exercises</p>
        <p>Most popular exercise per week</p>
        </div>
        <div className='exercises'>
            <ZenExercise 
            text="Sleep"
            width="185px"
            color="#FF3389"
          />
          <ZenExercise 
            text="Meditation"
            width="73px"
            color="#E0E0E0"
          />
          <ZenExercise 
            text="Anxiety"
            width="139px"
            color="#E0E0E0"
          />
          <ZenExercise 
            text="Journaling"
            width="110px"
            color="#E0E0E0"
          />
        </div>
          <button>Add New Exercise +</button>
      </div>
      </div>

      <div className='right-section'>
        <div className='reports-overview'>
          <p>Reports Overview</p>
          <ReportChart
          image={piechart1} 
          text1="Gender-based violence"
          percent1="40%"
          text2="Sexual Harrassment"
          percent2="45%"
          text3="Rape Issues"
          percent3="15%"
          />
            <div className='divider'></div>
          <ReportChart
          image={piechart2} 
          text1="Pending"
          percent1="17%"
          text2="In progress"
          percent2="25%"
          text3="Resolved"
          percent3="43%"
          text4="Closed"
          percent4="15%"
          />
        </div>
      </div>

    <div className='bottom-section'>
      <div className='reports-section'>
      <div className="reports-head">
        <div className='left'>
          <p>Reports</p>
          <p>See all your reports here</p>
        </div>
      <button className='see-all'>See All <FaArrowRightLong/></button>
      </div>
      <div className='reports-body'>
        <table>
          <thead>
            <tr>
              <th>Case No.</th>
              <th>Type</th>
              <th>Status</th>
              <th>Tracking</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <ReportList 
            id="A1208"
            type="Sexual Harrassment"
            status="Pending"
            color="#EAC400"
            bgcolor="#EAC4001A"
            width="35.88px"
            />
            <ReportList 
            id="A2051"
            type="Gender-based Violence"
            status="Pending"
            color="#EAC400"
            bgcolor="#EAC4001A"
            width="135.1px"
            />
            <ReportList 
            id="A2351"
            type="Rape Issues"
            status="Pending"
            color="#48C9B0"
            bgcolor="#48C9B01A"
            width="62.27px"
            />
            <ReportList 
            id="A2051"
            type="Gender-based Violence"
            status="Pending"
            color="#EAC400"
            bgcolor="#EAC4001A"
            width="62.27px"
            />
          </tbody>
        </table>
      </div>
      </div>
    </div>
      </div>
    </div>
  )
}

function Dashboardcard({text, number, percent, image, color, bgcolor}){
  return(
  <>
  <div className='card'>
  <div className='card-content'>
    <p>{text.toUpperCase()}</p>
    <p>{number} <span style={{color:color, background:bgcolor}}>{percent}%</span></p>
    </div>
    <img  src={image} alt='graph'/>
  </div>
  </>

  )
}

function UsersList({image, name, type, lastlogin, cases}){
  return(
    <>
  <tr>
  <td className='user-name'>
  <img src={image} alt='image'/>   
  <p>{name}</p>  
  </td>
  <td>{type}</td>
  <td>{lastlogin}</td>
  <td>{cases}</td>
  </tr>

    </>
  )
}

function ZenExercise({text, width, color}){
  return(
    <>
      <div className='exercise'>
      <p>{text}</p>
      <div className='progress-bar' style={{width:width, background:color}}></div>
      </div>
    </>
  )
}

function ReportList({id, type, status, color, bgcolor, width}){
  const today = new Date();
const formattedDate = today.toLocaleDateString('en-GB', { 
  day: '2-digit', 
  month: '2-digit', 
  year: 'numeric' 
});
  return(
    <>
    <tr>
      <td>{id}</td>
      <td>{type}</td>
      <td style={{color:color, background:bgcolor,}} className='status'>{status}</td>
      <td>
        <div className='progress-bar'>
        <div className='progress' style={{width:width}}></div>
      </div>
      </td>
      <td>{formattedDate}</td>
      <td className='icon'><HiDotsHorizontal /></td>
      </tr>
    </>
  )
}

function ReportChart({image, text1, percent1, text2, percent2, text3, percent3, text4, percent4}){
  return(
    <>
  <div className='report'>
    <img src={image} alt='chart'/>
  <ul>
    <li>{text1}<span>{percent1}</span></li>
    <li>{text2}<span>{percent2}</span></li>
    <li>{text3}<span>{percent3}</span></li>
    <li>{text4}<span>{percent4}</span></li>
  </ul>
  </div>
    </>
  )
}


export default Dashboard 