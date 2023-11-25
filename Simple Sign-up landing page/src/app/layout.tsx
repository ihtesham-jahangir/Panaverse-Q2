import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavigationMenuDemo } from './navbar'
import { AvatarDemo } from './avatar' 
import Image from 'next/image'
import logo from '@/assets/logo.png'
import Mid  from '../components/coustom/mid-container'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My First App',
  description: '@alpha newtworks 2021',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}
      <div className="flex items-center justify-center p-2 bg-blue-400">
      <div className="grid grid-cols-[10%,80%,10%] w-4/5 h-full ">
      <Image
        src={logo}
        alt=""
        width={100}
        height={100}
        ></Image>
      </div>
      <div className='justify-around'><NavigationMenuDemo /></div>
      <div className='pl-10'><AvatarDemo /></div>
      </div>
      <div className="flex items-center justify-center p-2">
      <Mid />
      </div>
      </body>
    </html>
  )
}
