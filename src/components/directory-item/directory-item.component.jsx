import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryBody,
  BodyTitle,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title,route } = category;
  const navigate= useNavigate()

  const onNavigateHandler = ()=> navigate(route)
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBody>
        <BodyTitle>{title}</BodyTitle>
        <p>Shop Now</p>
      </DirectoryBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
