import React from "react";

async function BookList({ params }: { params: Promise<{ authorId: string }> }) {
  const { authorId } = await params;
  return <div>Author BookList - {authorId}</div>;
}

export default BookList;
