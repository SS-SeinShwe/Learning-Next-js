import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <h1 className="bg-amber-300 p-4 text-2xl font-bold">Hello</h1>
      <Link href="/login">Go to Login</Link>
      <Link href="/product">Go to Product</Link>
    </div>
  );
}
