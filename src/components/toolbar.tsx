export function Toolbar({setSearchTerm}){
  function handleChange(e){
    const normalizedTerm = e.target.value.trim().toLowerCase();
    setSearchTerm(normalizedTerm);

  }
  return (
    <div>
      <input type="text" onChange={handleChange}/>
    </div>
  )
}