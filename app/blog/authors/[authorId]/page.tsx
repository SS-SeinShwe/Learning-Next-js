import React from "react";

async function AuthorDetails({
  params,
}: {
  params: Promise<{ authorId: string }>;
}) {
  const { authorId } = await params;
  return <div>AuthorDetails - {authorId}</div>;
}

export default AuthorDetails;
