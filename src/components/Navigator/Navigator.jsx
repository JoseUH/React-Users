import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLogout from "../ButtonLogout";
import "./Navigator.scss"
const Navigator = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <ButtonLogout />
        </li>
      </ul>
    </nav>
  )
}

export default Navigator