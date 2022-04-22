import React from 'react'
import "./cart-dropdown.styles.scss"
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/card.context'
import { useContext } from 'react'


const CartDropdown = () => {
    const {cartItem} = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItem.map((item)=> <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button>Go to Checkout</Button>
        </div>
    )
}

export default CartDropdown
