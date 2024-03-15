import React from 'react'

const Spinner = () => {
  return (
  
    < div className='d-flex justify-content-center align-items-center'
     style={{height:"100vh"}}>

  <div className="spinner-grow text-secondary  " role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-success" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-danger" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  
  <div className="spinner-grow text-info" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  
  


    </div>
  )
}

export default Spinner