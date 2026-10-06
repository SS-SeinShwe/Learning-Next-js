interface Post {
  id: string;
  title: string;
  authorId: number;
  views: number;
}

async function BlogList() {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate slow data fetching with a 5-second delay
  // Simulate slow data fetching
  const response = await fetch("http://localhost:4000/posts", {
    // next: { revalidate: 120 },
    cache: "no-store", // Disable caching to always fetch fresh data
  });
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts: Post[] = await response.json();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">
        Blog Posts - {new Date().toLocaleTimeString()}
      </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3 className="text-lg font-semibold text-gray-900">
              {post.title}
            </h3>
            <p className="text-gray-600">By {post.authorId}</p>
            <p className="text-sm text-gray-500">{post.views} views</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
