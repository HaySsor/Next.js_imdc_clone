import Image from 'next/image';
import Link from 'next/link';
import {BsFillHandThumbsUpFill} from 'react-icons/bs';

export default function Card({result}) {
  return (
    <div className='cursor-pointer border p-5 sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group grid place-item-center'>
      <Link href={`/movie/${result.id}`}>
        <Image
          width={500}
          height={300}
          alt={result.original_title}
          className='rounded-xl sm:rounded-t-lg group-hover:opacity-70 transition-opacity duration-200 mx-auto'
          src={`https://image.tmdb.org/t/p/original${
            result.backdrop_path || result.poster_path
          }`}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          placeholder='blur'
          blurDataURL='/Spinner.svg'></Image>
        <div className='p-2'>
          <h2 className='font-bold text-amber-500 line-clamp-1'>
            {result.title || result.name}
          </h2>
          <p className='line-clamp-2 text-md mx-auto'>{result.overview}</p>
          <p className='text-green-200 text-sm font-light flex justify-between items-center mt-2'>
            {result.release_date || result.first_air_date}
            <span className='flex gap-1 items-center'>
              <BsFillHandThumbsUpFill />
              {result.vote_count}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}
