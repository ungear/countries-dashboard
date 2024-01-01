import styles from './history.module.css';

export function History({searchHistory, onHistoryClick}){
  return (
    <ul className={styles.history}>
      {searchHistory.map(h => (
        <li key={h.id} className={styles.history__item}>
          <span className={styles.history__term} onClick={() => onHistoryClick(h)}>{h.value}</span> 
          ({h.resultsNumber})
        </li>
      ))}
    </ul>
  )
}