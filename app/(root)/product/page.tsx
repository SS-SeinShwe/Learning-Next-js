// // <Server Side Search Params>
// async function ProductList({
//   searchParams,
// }: {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }) {
//   const { page = 1, category = "", query = "" } = await searchParams;
//   return (
//     <div>
//       <h1>ProductList</h1>
//       <p>Current page - {page}</p>
//       <p>category - {category}</p>
//       <p>query - {query}</p>
//     </div>
//   );
// }

// export default ProductList;
// <Server Side Search Params/>
// -------------------------------------

// // <Client Side Search Params>
// "use client";

// import { use } from "react";

// function ProductList({
//   searchParams,
// }: {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }) {
//   const { page = 1, category = "", query = "" } = use(searchParams);
//   return (
//     <div>
//       <h1>ProductList</h1>
//       <p>Current page - {page}</p>
//       <p>category - {category}</p>
//       <p>query - {query}</p>
//     </div>
//   );
// }

// export default ProductList;
// // <Client Side Search Params/>
// -------------------------------------

// // <Client Side useSearchParams>
"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ProductListContent() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  const category = searchParams.get("category") || "";
  const query = searchParams.get("query") || "";
  return (
    <div>
      <h1>ProductList</h1>
      <p>Current page - {page}</p>
      <p>category - {category}</p>
      <p>query - {query}</p>
    </div>
  );
}

function ProductList() {
  return (
    <Suspense fallback={<h1>ProductList</h1>}>
      <ProductListContent />
    </Suspense>
  );
}

export default ProductList;
