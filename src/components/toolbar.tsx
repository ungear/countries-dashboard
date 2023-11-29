export function Toolbar({setSearchTerm}){
  function onSearchFieldChanged(e){
    const normalizedTerm = e.target.value.trim().toLowerCase();
    setSearchTerm(normalizedTerm);

  }
  return (
    <div>
      <input type="text" onChange={onSearchFieldChanged}/>
    </div>
  )
}