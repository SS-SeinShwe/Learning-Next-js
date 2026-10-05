import React from "react";

async function Docs({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  return (
    <div>
      Docs - {slug && slug.length >= 1 ? <p>Title - {slug[0]}</p> : <p>no</p>}
    </div>
  );
}

export default Docs;
