"use client";

import { notFound, useParams } from "next/navigation";

function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  if (Number(productId) > 100) {
    notFound();
  }
  return <div>ProductDetail - {productId}</div>;
}

export default ProductDetail;

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

// function ProductDetail(props: PageProps<"/product/[productId]">) {
//   //   const { productId } = await props.params;
//   const { productId } = use(props.params);
//   return <div>ProductDetail - {productId}</div>;
// }
