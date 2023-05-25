'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleInputType = (e) => {
    setSearch(e.target.value);
  };

  const handleSummitForm = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    router.push(`/search/${search}`);
    setSearch('')
  };

  return (
    <form
      className='flex max-w-6xl mx-auto justify-around items-center'
      onSubmit={handleSummitForm}>
      <input
        className='w-full h-14 rounded-sm placeholder-gray-200 outline-none
        bg-transparent flex-1'
        type='text'
        placeholder='Search keywords...'
        value={search}
        onChange={handleInputType}
      />
      <button disabled={!search} className='text-amber-500 disabled:text-gray-400'>Search</button>
    </form>
  );
}
