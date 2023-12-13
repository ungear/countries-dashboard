import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Toolbar } from '../components/toolbar'
import { History } from '../components/history'
import { CountriesGrid } from '../components/countriesGrid'
import { useState } from 'react'

const COUNTRIES = [
  { name: 'Russia', capital: 'Moscow' },
  { name: 'Georgia', capital: 'Tbilisi' },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [historyCounter, setHistoryCounter] = useState(0);

  const countriesToShow = COUNTRIES.filter(x => {
    return Object.values(x).some(f => f.toLowerCase().includes(searchTerm));
  })

  function onSearchTermUpdate(val){
    setSearchTerm(val);
    if(val.trim().length > 0) pushHistoryItem(val);
  }
  function onHistoryClick(historyItem){
    setSearchTerm(historyItem.val);
  }
  function pushHistoryItem(val){
    const newHistoryItem = {
      val,
      id: historyCounter
    };
    setHistoryCounter(historyCounter + 1);
    const newHistory = [...searchHistory, newHistoryItem];
    setSearchHistory(newHistory);
  }
  return (
    <section className={styles.main}>
      <History searchHistory={searchHistory} onHistoryClick={onHistoryClick}></History>
      <div>
        <Toolbar searchTerm={searchTerm} setSearchTerm={onSearchTermUpdate}></Toolbar>
        <CountriesGrid countries={countriesToShow}></CountriesGrid>
      </div>
    </section>
  )
}
