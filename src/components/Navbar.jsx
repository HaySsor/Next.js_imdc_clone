import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className='flex justify-center items-center gap-11 dark:bg-gray-600 p-4 bg-amber-500'>
      <NavbarItem title='Trending' param='fetchTrending' />
      <NavbarItem title='Top Rated' param='fetchTopRated' />
    </div>
  );
}
