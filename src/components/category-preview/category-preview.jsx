import React from "react";
import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Preview,
  PreviewTitle,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <>
      <PreviewTitle to={title}>
        {title.toUpperCase()}
      </PreviewTitle>
      <CategoryPreviewContainer>
        <Preview>
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Preview>
      </CategoryPreviewContainer>
    </>
  );
};

export default CategoryPreview;
