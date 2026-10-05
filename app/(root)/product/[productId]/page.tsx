// "use client";

// import { useParams } from "next/navigation";

// function ProductDetail() {
//   const { productId } = useParams<{ productId: string }>();
//   if (Number(productId) > 110) {
//     // notFound();
//     throw new Error("Product not found");
//   }
//   return <div>ProductDetail - {productId}</div>;
// }

// async function ProductDetail({
//   params,
// }: {
//   params: Promise<{ productId: string }>;
// }) {
//   const { productId } = await params;
//   return <div>ProductDetail - {productId}</div>;
// }

async function ProductDetail(props: PageProps<"/product/[productId]">) {
  const { productId } = await props.params;
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>ProductDetail - {productId}</div>;
}

export default ProductDetail;

// function ProductDetail(props: PageProps<"/product/[productId]">) {
//   //   const { productId } = await props.params;
//   const { productId } = use(props.params);
//   return <div>ProductDetail - {productId}</div>;
// }
