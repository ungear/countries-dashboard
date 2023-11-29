import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Toolbar } from '../components/toolbar'
import { CountriesGrid } from '../components/countriesGrid'
import { useState } from 'react'

const COUNTRIES = [
  { name: 'Russia', capital: 'Moscow' },
  { name: 'Georgia', capital: 'Tbilisi' },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const countriesToShow = COUNTRIES.filter(x => {
    return Object.values(x).some(f => f.toLowerCase().includes(searchTerm));
  })
  return (
    <section>
      <Toolbar setSearchTerm={setSearchTerm}></Toolbar>
      <CountriesGrid countries={countriesToShow}></CountriesGrid>
    </section>
  )
}
