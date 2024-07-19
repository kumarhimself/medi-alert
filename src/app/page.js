import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 class="text-3xl text-primary">Hello</h1>
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
}
