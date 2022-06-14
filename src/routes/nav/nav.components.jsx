import React from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assests/crown.svg";
import { NavigationContainer,NavLink,NavLinks,LogoContainer } from "./nav.styles";
import { useContext } from "react";
import UserContext from "../../contexts/user.context";
import { signOutUser } from "../../components/firebase/firebase.component";
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/card.context";

const Nav = () => {
  const { currentUser } = useContext(UserContext);
 const {isCartOpen}= useContext(CartContext)
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink  to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as= 'span' onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink  to="/auth">
              Sign-In
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Nav;
