import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="nav-wrapper">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/trainers">Trainers</a></li>
          <li>< a href="/pokemon">Home</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
