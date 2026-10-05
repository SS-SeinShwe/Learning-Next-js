import React from "react";

async function ProductDetailLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ productId: string }>;
}>) {
  const { productId } = await params;
  return (
    <>
      <h1>Product Detail Header - {productId}</h1>
      {children}
    </>
  );
}

export default ProductDetailLayout;
