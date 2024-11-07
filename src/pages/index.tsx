import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic';

import styles from '@/styles/Home.module.css'
const Navbar = dynamic(() => import('../components/Navbar'), {
  ssr: false, // Disable server-side rendering
});
import HomeP from '../components/home'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeP />
    </>
  )
}
