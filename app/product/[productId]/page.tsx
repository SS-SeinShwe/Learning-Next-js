import React from "react";

async function ProductDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return <div> ProductDetail - {productId}</div>;
}

export default ProductDetail;
