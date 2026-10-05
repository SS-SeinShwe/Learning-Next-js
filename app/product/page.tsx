import React from "react";

async function ProductList({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page = 1, category = "", query = "" } = await searchParams;
  return (
    <div>
      <h1>ProductList</h1>
      <p>Current page - {page}</p>
      <p>category - {category}</p>
      <p>query - {query}</p>
    </div>
  );
}

export default ProductList;
