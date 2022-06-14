import { React, useContext } from "react";
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'
import { CartContext } from '../../contexts/card.context'
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCount,
} from "./cart-icon.styles";

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen,cartCount}= useContext(CartContext)
    

    const toggleIsCartOpen =()=> setIsCartOpen(!isCartOpen)
    return (
      <CartIconContainer>
        <ShoppingIconContainer>
          <ShoppingIcon onClick={toggleIsCartOpen} />
        </ShoppingIconContainer>

        <ItemCount>{cartCount}</ItemCount>
      </CartIconContainer>
    );
}

export default CartIcon
