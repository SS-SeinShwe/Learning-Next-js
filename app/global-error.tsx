"use client";

function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col items-center justify-center">
          <h2>Something went wrong!</h2>
          <p>{error.message}</p>
          <button
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={reset}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}

export default Error;
