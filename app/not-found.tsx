"use client";

import { usePathname } from "next/navigation";

function NotFoundPage() {
  const pathname = usePathname(); // localhost:3000/proc/123
  const firstRoute = pathname.split("/")[1];
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 | {firstRoute} Page Not Found</h1>
    </div>
  );
}

export default NotFoundPage;
