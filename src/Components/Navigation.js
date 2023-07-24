import React from 'react'
import {Link} from 'react-router-dom'


export default function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul type="square">
            <li><Link className="nav-link" to="/">Employee</Link>
            </li>
            <li><Link className='nav-link' to="/group">Group</Link>
            </li>
        </ul>   
      </nav>
    </div>
  )
}




