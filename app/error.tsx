"use client";

function Error({ error }: { error: Error & { digest?: string } }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
    </div>
  );
}

export default Error;
