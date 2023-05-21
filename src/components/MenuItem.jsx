import Link from 'next/link';
import React from 'react';

export default function MenuItem({title, address, Icon}) {
  return (
    <div>
      <Link href={address} className='hover:text-amber-600'>
        <Icon className='text-2xl sm:hidden' />
        <p className='hidden p-2  sm:block  text-sm'>{title}</p>
      </Link>
    </div>
  );
}
