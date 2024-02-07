import React,{useState} from 'react'
import './NavBar.css'
import { FaBars} from 'react-icons/fa'
import { HiX } from 'react-icons/hi'

import logo from './cdlogo.png'

import { Link, animateScroll as scroll } from 'react-scroll';
const NavBar =()=> {

    const [isMobile, setIsMobile] = useState(false);

    const handleToggleIcon = () => {
        setIsMobile(!isMobile)
    }

    const dStyle ={
        margin:'0px 8px',
        textDecoration: 'none',
        fontFamily:'Inter',
        color: 'white',
        fontSize:'24px'
    }

  return (
    <div className='nav-bar-container'>
        <img className='bar-logo' src={logo} alt=''/>

        <div className={isMobile ? 'nav-links2-mobile' : 'nav-menu'}
            onClick={() => setIsMobile(false)}>
            <Link
                // activeClass="link-data"
                to="fs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={dStyle}
            >
                <p>Home</p>
            </Link>

            {/* <a className='link-data' href='#rt'>
                <p>Carrers</p>
            </a> */}
            <Link
                // activeClass="link-data"
                to="aboutus"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                style={dStyle}
            >
                <p>AboutUs</p>
            </Link>

            <Link
                // activeClass="link-data"
                to="courses"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                style={dStyle}
            >
                <p>Courses</p>
            </Link>

            {/* <a className='link-data' href='/'>
                <p>Partners</p>
            </a> */}
        </div>
        <button className='mobile-menu-icon' onClick={handleToggleIcon}>
            {isMobile ? <HiX size={30}/> : <FaBars size={30}/>}
        </button>
    </div>
  )
}

export default NavBar