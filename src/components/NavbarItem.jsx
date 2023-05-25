'use client';
import Link from 'next/link';
import {useSearchParams} from 'next/navigation';

export default function NavbarItem({title, param}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`cursor-pointer hover:text-amber-100 p-2 ${
          genre && genre === param ? 'text-amber-100' : ''
        } `}>
        {title}
      </Link>
    </div>
  );
}
