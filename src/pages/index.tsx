import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Toolbar } from '../components/toolbar'
import { CountriesGrid } from '../components/countriesGrid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const COUNTRIES = [
    { name: 'Russia', capital: 'Moscow' },
    { name: 'Georgia', capital: 'Tbilisi' },
  ]
  return (
    <section>
      <Toolbar></Toolbar>
      <CountriesGrid countries={COUNTRIES}></CountriesGrid>
    </section>
  )
}
