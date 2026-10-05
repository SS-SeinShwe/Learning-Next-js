export async function generateStaticParams() {
  // const authors = await fetch(
  //   "https://jsonplaceholder.typicode.com/users",
  // ).then((res) => res.json());
  // return authors.map((author: { id: number }) => ({
  //   authorId: author.id.toString(),
  // }));
  return [{ authorId: "1" }, { authorId: "2" }, { authorId: "3" }];
}

async function AuthorDetails({
  params,
}: {
  params: Promise<{ authorId: string }>;
}) {
  const { authorId } = await params;
  return (
    <div>
      AuthorDetails - {authorId} - {new Date().toLocaleTimeString()}
    </div>
  );
}

export default AuthorDetails;
