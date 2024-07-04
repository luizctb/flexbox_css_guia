"use client";

import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Página Principal</h1>
      <div>
        <Link href="/displayFlex">PG display flex / componente pai</Link>
      </div>
      <div>
        <Link href="/flexDirection">PG flex direction / componente pai</Link>
      </div>
      <div>
        <Link href="/justifyContent">PG justify Content / componente pai</Link>
      </div>
      <div>
        <Link href="/alignItems">PG align Itens / componente pai</Link>
      </div>
      <div>
        <Link href="/gap">PG gap / componente pai</Link>
      </div>
      <div>
        <Link href="/flexGrow">PG flex Grow / componente filho</Link>
      </div>
      <div>
        <Link href="/flexShrink">PG flex Shrink / componente filho</Link>
      </div>
      <div>
        <Link href="/alignSelf">PG align Self / componente filho</Link>
      </div>
    </main>
  );
}
