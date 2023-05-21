import {Inter} from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Providers from './Providers';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'IMDB Clone',
  description: 'This is a IMDB clone, doing to learn Next.js 13',
};

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          {/* header */}
          <Header />
          {/* Navbar */}
          {/* SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  );
}