import { useState, useEffect } from 'react'

export function Toolbar({searchTerm, setSearchTerm, reset}){
  const [term, setTerm] = useState(searchTerm);
  useEffect(() => {
    setTerm(searchTerm);
  }, [searchTerm])

  function handleSubmit(e){
    const normalizedTerm = term.trim().toLowerCase();
    setSearchTerm(normalizedTerm);
    e.preventDefault();
  }
  function handeChangeTerm(e){
    setTerm(e.target.value);
  }
  function handleResetClick(){
    reset();
  }
  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-auto">
        <input className="form-control form-control-sm" type="text" onChange={handeChangeTerm} value={term}/>
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary btn-sm me-1">Search</button>
        <button type="button" className="btn btn-warning btn-sm "onClick={handleResetClick}>Reset</button>
      </div>
    </form>
  )
}