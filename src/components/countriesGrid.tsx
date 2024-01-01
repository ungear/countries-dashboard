import styles from '@/styles/CountriesGrid.module.css'

export function CountriesGrid({countries}){
  const head = (
    <thead>
      <tr>
        <td>Name</td>
        <td>Capital</td>
        <td>Continent</td>
        <td>Population</td>
        <td>Currency</td>
      </tr>
    </thead>
  )
  const rows = countries.map(x => {
    return (
      <tr key={x.name}>
        <td>{x.name}</td>
        <td>{x.capital}</td>
        <td>{x.continent}</td>
        <td>{x.population}</td>
        <td>{x.currency}</td>
      </tr>
    )
  })
  return (
    <table className={styles.countriesGrid}>
      {head}
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}