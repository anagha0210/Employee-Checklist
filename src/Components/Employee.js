import React from "react"
export default function Employee({team,employee,changeteam,onclicktoggle}) { //destructuring into an object which makes it easier to access instead of having to specify it like props.team ets
    return(
    <div className="row justify-content-center mt-6 mb-6">
      <div className="col-6">
        <select id="filter" className="form-select form-select-lg m-4" onChange={changeteam}>
          <option value="Team A" >Team A</option>
          <option value="Team B" >Team B</option>
          <option value="Team C" >Team C</option>
          <option value="Team D" >Team D</option>
        </select>
      </div>
        <div className="col-8">
          <div className="container employee-collection">
            {
              employee.map((employee)=>(  
              <div id={employee.id} key={employee.id} className={employee.teamName===team?" card m-2 selectedstyle":"card m-2"}style={{cursor:'pointer'}} onClick={onclicktoggle}>
                {(employee.gender==="female")?<img className="fimg" src="./femaleProfile.jpg" alt="not found" />:<img className="mimg" src="./maleProfile.jpg" alt="not found" />}
                <div className="card-body">
                  <h5 className="card-title">Full Name:{employee.fullName}</h5>
                  <p><b>Designation:</b> {employee.designation}</p>
                  <p>Team : {employee.teamName}</p>
              </div>
              </div> 
             ))}
          </div>
          </div>
      </div>
)
}

