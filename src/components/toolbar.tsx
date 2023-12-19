import { useState } from 'react'

export function Toolbar({searchTerm, setSearchTerm}){
  const [term, setTerm] = useState(searchTerm);
  function handleSearchClick(){
    const normalizedTerm = term.trim().toLowerCase();
    setSearchTerm(normalizedTerm);
  }
  function handeChangeTerm(e){
    setTerm(e.target.value);
  }
  return (
    <div>
      <input type="text" onChange={handeChangeTerm} value={term}/><button onClick={handleSearchClick}>Search</button>
    </div>
  )
}