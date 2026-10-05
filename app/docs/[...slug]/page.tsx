import React from "react";

async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return <div>Docs - {slug.join("/")}</div>;
}

export default Docs;
