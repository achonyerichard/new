import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../assests/crown.svg'
import './nav.styles.scss'
import { useContext } from 'react'
import UserContext from '../../contexts/user.context'
import {signOutUser} from '../../components/firebase/firebase.component'


const Nav = () => {
    const { currentUser} = useContext(UserContext)

 
    return (
      <>
        <div className="navigation">
          <Link className="logo-container" to="/">
            <CrownLogo className="logo" />
          </Link>

          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to="/auth">
                Sign-In
              </Link>
            )}
          </div>
        </div>
        <Outlet />
      </>
    );
}

export default Nav
