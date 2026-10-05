"use client";

import React, { use } from "react";

// async function ProductDetail({
//   params,
// }: {
//   params: Promise<{ productId: string }>;
// }) {
//   const { productId } = await params;
//   return <div>ProductDetail - {productId}</div>;
// }

// async function ProductDetail(props: PageProps<"/product/[productId]">) {
//   const { productId } = await props.params;
//   return <div>ProductDetail - {productId}</div>;
// }

function ProductDetail(props: PageProps<"/product/[productId]">) {
  //   const { productId } = await props.params;
  const { productId } = use(props.params);
  return <div>ProductDetail - {productId}</div>;
}

export default ProductDetail;
