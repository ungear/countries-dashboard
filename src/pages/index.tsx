import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Toolbar } from '../components/toolbar'
import { History } from '../components/history'
import { CountriesGrid } from '../components/countriesGrid'
import { useState, useReducer } from 'react'

const COUNTRIES = [
  { name: 'Russia', capital: 'Moscow' },
  { name: 'Georgia', capital: 'Tbilisi' },
];
function historyReducer(history, action){
  switch(action.type){
    case 'added': {
      const newCounter = history.counter + 1;
      const newItem = {
        value: action.value,
        resultsNumber: action.resultsNumber,
        id: newCounter
      };
      return {
        counter: newCounter,
        items: [...history.items, newItem]
      }
    } 
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [countriesToShow, setCountriesToShow] = useState(COUNTRIES);
  const [history, dispatchHistory] = useReducer(historyReducer, { items: [], counter: 0});


  function applySearch(val, shouldAddToHistory = true){
    setSearchTerm(val);
    const filteredCountries = COUNTRIES.filter(x => {
      return Object.values(x).some(f => f.toLowerCase().includes(val));
    })
    setCountriesToShow(filteredCountries);
    if(shouldAddToHistory)
      pushHistoryItem(val, filteredCountries.length);
  }
  function onHistoryClick(historyItem){
    applySearch(historyItem.value, false);
  }
  function pushHistoryItem(value, resultsNumber){
    dispatchHistory({
      type: 'added',
      value,
      resultsNumber,
    })
  }
  return (
    <section className={styles.main}>
      <History searchHistory={history.items} onHistoryClick={onHistoryClick}></History>
      <div>
        <Toolbar searchTerm={searchTerm} setSearchTerm={applySearch} key={searchTerm}></Toolbar>
        <CountriesGrid countries={countriesToShow}></CountriesGrid>
      </div>
    </section>
  )
}
