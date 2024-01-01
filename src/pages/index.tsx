import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Toolbar } from '../components/toolbar'
import { History } from '../components/history'
import { CountriesGrid } from '../components/countriesGrid'
import { useState, useReducer } from 'react'

const COUNTRIES = [
  { name: 'Russia', capital: 'Moscow', continent: 'Eurasia', population: 143, currency: 'Ruble (₽)' },
  { name: 'Georgia', capital: 'Tbilisi', continent: 'Eurasia', population: 3, currency: 'Georgian lari (₾)' },
  { name: 'USA', capital: 'Washington', continent: 'North America', population: 330, currency: 'U.S. dollar ($)' },
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
  const columnsStartState = Object.keys(COUNTRIES[0]).map(x => ({ name: x, isActive: true}))
  const [columns, setColumns] = useState(columnsStartState);

  function applySearch(val, shouldAddToHistory = true){
    setSearchTerm(val);
    const filteredCountries = COUNTRIES.filter(x => {
      return Object.values(x).some(f => f.toString().toLowerCase().includes(val));
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
  function handleReset(){
    setSearchTerm('');
    applySearch('', false);
  }
  function handleColumnsChange(cols){
    setColumns([...cols]);
  }
  return (
    <section className={styles.main}>
      <History searchHistory={history.items} onHistoryClick={onHistoryClick}></History>
      <div>
        <Toolbar 
          searchTerm={searchTerm} 
          setSearchTerm={applySearch} 
          reset={handleReset} 
          columns={columns}
          onColumnsChange={handleColumnsChange}></Toolbar>
        <CountriesGrid 
          columns={columns.filter(x => x.isActive)}
          countries={countriesToShow}></CountriesGrid>
      </div>
    </section>
  )
}
