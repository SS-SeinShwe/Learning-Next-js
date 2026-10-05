import React from "react";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen flex-col">
      <h1 className="bg-sky-300 text-2xl text-black">Navigation Header</h1>
      {children}
      <h2 className="bg-sky-300 text-2xl text-black">Footer</h2>
    </div>
  );
}
