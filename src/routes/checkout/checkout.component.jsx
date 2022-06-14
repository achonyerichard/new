import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/card.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  BlockChild,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItem, cartTotal } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <BlockChild as="span">Products</BlockChild>
        </HeaderBlock>
        <HeaderBlock>
          <BlockChild as="span">Description</BlockChild>
        </HeaderBlock>
        <HeaderBlock>
          <BlockChild as="span">Quantity</BlockChild>
        </HeaderBlock>
        <HeaderBlock>
          <BlockChild as="span">Price</BlockChild>
        </HeaderBlock>
        <HeaderBlock>
          <BlockChild as="span">Remove</BlockChild>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItem.map((items) => (
        <CheckoutItem key={items.id} items={items} />
      ))}

      <Total as="span">${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
