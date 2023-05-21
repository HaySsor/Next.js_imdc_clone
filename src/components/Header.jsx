import Link from 'next/link';
import MenuItem from './MenuItem';
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoSquareFill} from 'react-icons/bs'
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex justify-between item-center  p-6 max-w-6xl sm:mx-auto'>
      <div className=' flex gap-6 '>
        <MenuItem title={'Home'} address={'/'} Icon={AiFillHome} />
        <MenuItem title={'About'} address={'/about'} Icon={BsFillInfoSquareFill} />
      </div>

      <div className='flex items-center gap-5'>
        <DarkModeSwitch />
        <Link href='/'>
            <h2 className='text-2xl'>
                <span className='font-bold bg-amber-500 p-1 rounded-lg' >IMDB</span>
                <span className='text-xl hidden sm:inline'>clone</span>
            </h2>
        </Link>
      </div>
    </div>
  );
}
