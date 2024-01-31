import React from 'react'
import { BasicMenu } from './Homepage'
import { Link } from 'react-router-dom'

import './Home.css';

const Nav = () => {
  return (  
  <div className="dod">
  <div className="header">
    <h1 style={{ fontFamily: '' }}>SeniorCloud Harmony</h1>
    <div className="topnav">
      <Link to="/" style={{ fontFamily: '' }}>Home</Link>
      <BasicMenu />
    </div>
    </div>
    </div>
  )
}

export default Nav