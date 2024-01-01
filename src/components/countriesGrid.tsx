import styles from '@/styles/CountriesGrid.module.css'

export function CountriesGrid({countries, columns}){
  const head = (
    <thead>
      <tr>
        {columns.map(x => <th key={x.name}>{x.name}</th>)}
      </tr>
    </thead>
  )
  const rows = countries.map(x => {
    return (
      <tr key={x.name}>
        {columns.map(col => <td key={x.name + col.name}>{x[col.name]}</td>)}
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