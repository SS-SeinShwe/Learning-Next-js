import React from "react";

// async function BookDetails({
//   params,
// }: {
//   params: Promise<{ authorId: string; bookId: string }>;
// }) {
//   const { authorId, bookId } = await params;
//   return (
//     <div>
//       BookDetails - {bookId} by Author {authorId}
//     </div>
//   );
// }

async function BookDetails(
  props: PageProps<"/blog/authors/[authorId]/books/[bookId]">,
) {
  const { authorId, bookId } = await props.params;
  return (
    <div>
      BookDetails - {bookId} by Author {authorId}
    </div>
  );
}

export default BookDetails;
