export function History({searchHistory, onHistoryClick}){
  return (
    <ul>
      {searchHistory.map(h => (
        <li key={h.id} onClick={() => onHistoryClick(h)}>{h.value}</li>
      ))}
    </ul>
  )
}