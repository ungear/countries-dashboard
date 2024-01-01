import { useState } from 'react'

export function ColumnsForm({columns, onChange}){
  const [columnsState, setColumns] = useState(columns);
  function handleChange(name, isChecked){
    setColumns(columnsState.map(x => {
      if(x.name === name) x.isActive = isChecked;
      return x;
    }));
    onChange(columnsState)
  }
  return (
    <>
      {columnsState.map(x => 
        <div className="form-check" key={x.name}>
          <input 
            className="form-check-input" 
            type="checkbox" 
            checked={x.isActive} 
            id={x.name} 
            onChange={(e) => {handleChange(x.name, e.target.checked)}}/>
          <label className="form-check-label" htmlFor={x.name}>
            {x.name}
          </label>
        </div>
      )}
    </>
  )
}