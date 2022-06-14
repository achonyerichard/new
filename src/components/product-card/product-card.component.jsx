import React from 'react'
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/card.context'
import {
  ProductContainer,
  ProductFooter,
  ProductName,
  ProductPrice,
} from "./product-card.styles";

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartContext)
   
    const cartAdd =()=>addItemToCart(product)
    
    const {name,price,imageUrl} = product;
    return (
      <ProductContainer>
        <img src={imageUrl} alt={`${name}`} />
        <ProductFooter>
          <ProductName as='span'>{name}</ProductName>
          <ProductPrice >{price}</ProductPrice>
        </ProductFooter>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={cartAdd}>
          Add to card
        </Button>
      </ProductContainer>
    );
}

export default ProductCard
