'use client';

import {useEffect} from 'react';

export default function Error({error, reset}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className='w-100 mt-11 flex justify-center items-center flex-col gap-5'>
      <h1 className='text-2xl text-red-400'>Something went wrong 🫣</h1>
      <button
        onClick={() => reset()}
        className='border-amber-500 border-2 px-5 py-3 rounded-xl'>
        Try Again
      </button>
    </div>
  );
}
