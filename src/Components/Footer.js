import logo from '../img/logo_light.png'
import React from 'react'

function Footer() {
    return (
        <footer id='main-footer'>
            <div className='container footer-container'>
                <div>
                    <img src={logo} alt='website-logo'></img>
                    <p>
                        If good journalism is to survive and thrive,
                        it can only do so by being both editorially and
                        financially independent.
                    </p>
                </div>
                <div>
                    <h3>Email Newsletter</h3>
                    <p>Get daily updates by subscribing our newsletter.</p>
                    <form>
                        <input id='email' type='email' placeholder='Enter Email...' ></input>
                        <input type='submit' value='Subscribe' className='btn btn-primary'></input>
                    </form>
                </div>
                <div>
                    <h3>Site links</h3>
                    <ul className='list'>
                        <li>Help & Support</li>
                        <li>Privacy Policy</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h2>Join Our Club</h2>
                    <p>It's free and only takes a minute.</p>
                    <button className='btn btn-secondary'>Join Now</button>
                </div>
                <div>
                    <p>Copyright &copy; 2021, All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
