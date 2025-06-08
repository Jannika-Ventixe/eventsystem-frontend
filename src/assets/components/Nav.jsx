import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.svg'
import ticket from '../images/ticket.svg'

const Nav = () => {

  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="Ventixe logo" className="logo" />
        <h1 className="header-title">Ventixe</h1>  
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/rooms" className="nav-link">
            <img src={ticket} alt="Rooms icon" className="nav-icon" />
            <span>Rooms</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav