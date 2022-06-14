import React from 'react'
import { CartContext } from '../../contexts/card.context'
import { useContext } from 'react'
import {
  CheckoutContainer,
  CheckoutImage,
  CheckoutName,
  CheckoutQuantity,
  CheckoutPrice,
  Arrow,
  Cancel,
} from "./checkout-item.styles";

const CheckoutItem = ({items}) => {
  const {clearItemFromCart, addItemToCart,removeItemToCart} = useContext(CartContext)
  const clearItemsHandler = () => clearItemFromCart(items);
  const addItemHandler =()=>addItemToCart(items)
  const removeItemHandler = () => removeItemToCart(items);

    const {name, imageUrl,price,quantity} = items
    return (
      <CheckoutContainer>
        <CheckoutImage>
          <img src={imageUrl} alt={`${name}`} />
        </CheckoutImage>
        <CheckoutName>{name}</CheckoutName>
        <CheckoutQuantity>
          <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
          {quantity}
          <Arrow onClick={addItemHandler}>&#10095;</Arrow>
        </CheckoutQuantity>
        <CheckoutPrice>{price}</CheckoutPrice>
        <Cancel onClick={clearItemsHandler}>&#10005;</Cancel>
      </CheckoutContainer>
    );
}

export default CheckoutItem
