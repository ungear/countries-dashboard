import styles from '@/styles/CountriesGrid.module.css'

export function CountriesGrid({countries}){
  const head = (
    <thead>
      <tr>
        <th>Name</th>
        <th>Capital</th>
        <th>Continent</th>
        <th>Population</th>
        <th>Currency</th>
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
    <table className={styles.countriesGrid + " table table-striped"}>
      {head}
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}