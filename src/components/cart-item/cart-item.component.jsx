import React from "react";
import {
  CartItemContainer,
  ImgContainer,
  ItemDetails,
  ItemName,
} from "./cart-item.styles";

const CardItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <ImgContainer src={imageUrl} alt={`${name}`} />

      <ItemDetails>
        <ItemName as="span">{name}</ItemName>
        <ItemName as="span">
          {quantity} * ${price}
        </ItemName>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CardItem;
