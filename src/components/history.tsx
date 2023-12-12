export function History({searchHistory}){
  return (
    <ul>
      {searchHistory.map(x => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  )
}