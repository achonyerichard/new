import { React, useContext } from "react";
import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'
import { CartContext } from '../../contexts/card.context'

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen,cartCount}= useContext(CartContext)
    

    const toggleIsCartOpen =()=> setIsCartOpen(!isCartOpen)
    return (
        <div className='cart-icon-container'>
            < ShoppingIcon className='shopping-icon' onClick={toggleIsCartOpen}/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon
