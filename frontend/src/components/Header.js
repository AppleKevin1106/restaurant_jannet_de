import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <div className="header__total">
            <div className="header__main">
                <div className="header__nav">
                    <div className="header__nav__logo">
                        <a href='#'>
                            <div className="header__nav__logo__box">
                                <span className="header__nav__logo__main">
                                    <img className="header__nav__logo__img" src="../logo.webp" />
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="header__nav__title">
                        <nav className='header__navbar'>
                            <ul className='header__navbar__ul'>
                                <li className='header__navbar__li'>
                                    <h2 className='header__navbar__title'>
                                        <Link to = '/home'>HOME</Link>
                                    </h2>
                                </li>
                                <li className='header__navbar__li__default'>
                                    <h2 className='header__navbar__title'>
                                        <Link to = '/'>MENU</Link>
                                    </h2>
                                </li>
                                <li className='header__navbar__li'>
                                    <h2 className='header__navbar__title'>
                                        <Link to = '/reservation'>RESERVATION</Link>
                                    </h2>
                                </li>
                                <li className='header__navbar__li'>
                                    <h2 className='header__navbar__title'><Link to = '/gallery'>
                                        GALLERY</Link>
                                    </h2>
                                </li>
                                <li className='header__navbar__li'>
                                    <h2 className='header__navbar__title'><Link to = '/contact'>
                                        CONTACT</Link>
                                    </h2>
                                </li>
                                <li className='header__navbar__li'>
                                    <h2 className='header__navbar__title'>
                                        <Link to = '/auth'>SIGN IN</Link>
                                    </h2>
                                </li>
                                <a>
                                    <div className='header__navbar__flag'>
                                        <div className='header__navbar__flag__main'>
                                            <span className='header__nav__logo__main' style={{width: "60px", height: "60px"}}>
                                                <img className='header__nav__logo__img ' src='../country.png' />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </ul>
                        </nav>
                    </div>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Header