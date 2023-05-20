import { Inter } from 'next/font/google'
import Icon from '../../public/vercel.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone',
  description: 'This is a IMDB clone, doing to learn Next.js 13',
  icon: Icon,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
