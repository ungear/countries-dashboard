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
  const [selectedId, setSelectedId] = useState(0);
  const [history, dispatchHistory] = useReducer(historyReducer, { items: [], counter: 0});

  const countriesToShow = COUNTRIES.filter(x => {
    return Object.values(x).some(f => f.toLowerCase().includes(searchTerm));
  })

  function onSearchTermUpdate(val){
    setSearchTerm(val);
    if(val.trim().length > 0) pushHistoryItem(val);
  }
  function onHistoryClick(historyItem){
    setSearchTerm(historyItem.value);
    setSelectedId(historyItem.id)
  }
  function pushHistoryItem(value){
    dispatchHistory({
      type: 'added',
      value,
    })
  }
  return (
    <section className={styles.main}>
      <History searchHistory={history.items} onHistoryClick={onHistoryClick}></History>
      <div>
        <Toolbar searchTerm={searchTerm} setSearchTerm={onSearchTermUpdate} key={selectedId}></Toolbar>
        <CountriesGrid countries={countriesToShow}></CountriesGrid>
      </div>
    </section>
  )
}
