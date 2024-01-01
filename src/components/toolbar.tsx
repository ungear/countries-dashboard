import { useState, useEffect } from 'react'

export function Toolbar({searchTerm, setSearchTerm, reset}){
  const [term, setTerm] = useState(searchTerm);
  useEffect(() => {
    setTerm(searchTerm);
  }, [searchTerm])

  function handleSearchClick(){
    const normalizedTerm = term.trim().toLowerCase();
    setSearchTerm(normalizedTerm);
  }
  function handeChangeTerm(e){
    setTerm(e.target.value);
  }
  function handleResetClick(){
    reset();
  }
  return (
    <div>
      <input type="text" onChange={handeChangeTerm} value={term}/>
      <button onClick={handleSearchClick}>Search</button>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  )
}