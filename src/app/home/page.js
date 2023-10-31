import Link from 'next/link';

export default function Page() {
  return (
    <div>

      <h1>
        Home page! Go to <Link href="/about">about</Link>
      </h1>
    </div>
  )
}