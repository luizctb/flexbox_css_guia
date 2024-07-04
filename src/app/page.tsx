"use client";

import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Página Principal</h1>
      <div>
        <Link href="/displayFlex">PG display flex</Link>
      </div>
      <div>
        <Link href="/flexDirection">PG flex direction</Link>
      </div>
      <div>
        <Link href="/justifyContent">PG justify Content</Link>
      </div>
    </main>
  );
}
