import styles from '@/styles/CountriesGrid.module.css'

export function CountriesGrid({countries}){
  const head = (
    <thead>
      <tr>
        <td>Name</td>
        <td>Capital</td>
      </tr>
    </thead>
  )
  const rows = countries.map(x => {
    return (
      <tr key={x.name}>
        <td>{x.name}</td>
        <td>{x.capital}</td>
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