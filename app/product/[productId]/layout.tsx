import React from "react";

function ProductDetailLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <h1>Product Detail Header</h1>
      {children}
    </>
  );
}

export default ProductDetailLayout;
