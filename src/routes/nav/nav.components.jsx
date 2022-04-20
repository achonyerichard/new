import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../assests/crown.svg'
import './nav.styles.scss'

const Nav = () => {
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container'to="/">
                    <CrownLogo className='logo'/>
                </Link>
   
                <div className="nav-links-container">
                    <Link className='nav-link' to="/shop">
                        Shop
                    </Link>
                    <Link className='nav-link' to="/auth">
                        Sign-In
                    </Link>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Nav
