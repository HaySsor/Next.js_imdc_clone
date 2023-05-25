import Image from 'next/image';
import {BsFillHandThumbsUpFill} from 'react-icons/bs';

const API_KEY = process.env.API_KEY;

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return await res.json();
};

export default async function Movie({params}) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
 
  return (
    <div className='w-full'>
      <div className='p-4 m:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
        <Image
          width={500}
          height={300}
          alt={movie.original_title || movie.name}
          className='rounded-lg'
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          style={{
            maxWidth: '100%',
            height: '100%',
          }}
          placeholder='blur'
          blurDataURL='/Spinner.svg'></Image>
        <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold'>
            {movie.original_title || movie.name}
          </h2>
          <p className='text-lg mb-3'>
            <span className='text-amber-500 font-bold mr-1'>Overview:</span>{' '}
            {movie.overview}
          </p>
          <p>
            <span className='font-semibold text-amber-500 mr-2'>
              Data Released:
            </span>
            {movie.release_date}
          </p>
          <p className='pt-2 flex items-center'>
            <span className='font-semibold text-amber-500 mr-2'>Vote: </span> 
            {movie.vote_average.toFixed(1)} / 10
          </p>
        </div>
      </div>
    </div>
  );
}
