import React from 'react'
import './NavBar.css'

import logo from './cdlogo.png'

const NavBar =()=> {
  return (
    <div className='nav-bar-container'>
        <img className='bar-logo' src={logo} alt=''/>

        <div className='nav-menu'>
            <a className='link-data' href='/'>
                <p>Courser</p>
            </a>

            <a className='link-data' href='/'>
                <p>Carrers</p>
            </a>

            <a className='link-data' href='/'>
                <p>Partners</p>
            </a>
        </div>
    </div>
  )
}

export default NavBar