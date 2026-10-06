interface Post {
  id: string;
  title: string;
  authorId: number;
  views: number;
}

async function BlogList() {
  // Simulate slow data fetching
  const response = await fetch("http://localhost:4000/posts", {
    next: { revalidate: 120 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts: Post[] = await response.json();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
          <p className="text-gray-600">By {post.authorId}</p>
          <p className="text-sm text-gray-500">{post.views} views</p>
        </li>
      ))}
    </ul>
  );
}

export default BlogList;
