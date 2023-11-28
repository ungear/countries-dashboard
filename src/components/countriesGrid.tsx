import styles from '@/styles/CountriesGrid.module.css'

export function CountriesGrid({countries}){
  const rows = countries.map(x => {
    return (
      <div key={x.name}>
        <div>{x.name}</div>
        <div>{x.capital}</div>
      </div>
    )
  })
  return (
    <div className={styles.countriesGrid}>{rows}</div>
  )
}