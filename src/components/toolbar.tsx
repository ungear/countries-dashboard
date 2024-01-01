import { useState, useEffect } from 'react'
import { Modal } from './modal';
import { ColumnsForm } from './columnsForm';

export function Toolbar({searchTerm, setSearchTerm, reset, columns, onColumnsChange}){
  const [term, setTerm] = useState(searchTerm);
  const [isPopupEnabled, setIsPopupEnabled] = useState(false);
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
  function handleOpenPopup(){
    setIsPopupEnabled(true);
  }
  function handleClosePopup(){
    setIsPopupEnabled(false);
  }
  function handleColumnsChange(cols){
    onColumnsChange(cols);
  }
  return (
    <>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-auto">
          <input className="form-control form-control-sm" type="text" onChange={handeChangeTerm} value={term}/>
        </div>
        <div className="col-auto d-flex flex-grow-1 justify-content-between">
          <div>
            <button type="submit" className="btn btn-primary btn-sm me-1">Search</button>
            <button type="button" className="btn btn-warning btn-sm" onClick={handleResetClick}>Reset</button>
          </div>
          <div>
            <button type="button" className="btn btn-secondary btn-sm" onClick={handleOpenPopup}>Settings</button>
          </div>
        </div>
      </form>
      {isPopupEnabled && 
        <Modal title="Edit visible columns" onClose={handleClosePopup}>
          <ColumnsForm columns={columns} onChange={handleColumnsChange}></ColumnsForm>
        </Modal>
      }
    </>
  )
}