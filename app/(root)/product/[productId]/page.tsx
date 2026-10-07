import { notFound } from "next/navigation";

async function ProductDetail(props: PageProps<"/product/[productId]">) {
  const { productId } = await props.params;
  if (Number(productId) > 100) {
    notFound();
  }

  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>ProductDetail - {productId}</div>;
}

export default ProductDetail;
