import React from 'react'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/card.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContainer, CartItems, CartMessage } from "./cart-dropdown.styles";


const CartDropdown = () => {
    const navigate = useNavigate();
    const goToCheckOut=()=>navigate('/checkout')
    const {cartItem} = useContext(CartContext)
    return (
      <CartContainer>
        <CartItems>
          {
          cartItem.length ? (cartItem.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))):(
             <CartMessage as = 'span'>Your Cart is Empty</CartMessage>
             )
             }
        </CartItems>
        <Button onClick={goToCheckOut}>Go to Checkout</Button>
      </CartContainer>
    );
}

export default CartDropdown
