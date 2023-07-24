import React from 'react'
export default function Header({selectedteam,countofemployees}) {
  return (
    <div className="row justify-content-center mt4-mb-3 mx-4 my-3">
      <div className="col-8">
      <h1>Team member Allocation</h1>
      <h3>The selected Team :-  <b>{selectedteam}</b> has <b>{countofemployees}</b> employees/members.</h3>
    </div>
    </div>
    
  )
}

