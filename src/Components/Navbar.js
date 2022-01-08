import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {

    const navStyle = {
        color: 'white'
    }

    return (
        <nav id = 'main-nav'>
            <div className='container'>
                <Link style={navStyle} to='/'>
                <img src={logo} alt="NewsGrid" className='logo' />
                </Link>    
                <div className="social">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-youtube fa-2x"></i>
                    </a>
                </div>
                <ul>
                    <Link style={navStyle} to='/'>
                    <li><a href='#' className='current'>HOME</a></li>
                    </Link>
                    <Link style={navStyle} to='/about'>
                    <li><a href='#'>ABOUT</a></li>
                    </Link>
                </ul>
            </div>
            <div className='category-container'>
                <ul>
                    <Link to='/businessNews'>
                    <li><a href='#' >Business</a></li>
                    </Link>
                    <Link to='/sportsNews'>
                    <li><a href='#'>Sports</a></li>
                    </Link>
                    <Link to='/entertainmentNews'>
                    <li><a href='#'>Entertainment</a></li>
                    </Link>
                    <Link to='/technologyNews'>
                    <li><a href='#'>Technology</a></li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
