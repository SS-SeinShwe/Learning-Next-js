import React from "react";

async function Docs1({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  return <div>Docs1 - {slug?.join("/") ?? "Home"}</div>;
}

export default Docs1;
