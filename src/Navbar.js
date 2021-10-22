
import React from 'react'
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (<>
    
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#475562', borderBottom: '0.5px white solid', borderTop: '0.5px white solid' }}>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink activeClassName="bg-success" className="nav-item nav-link  text-white text-uppercase mx-2 " to="/restapi">RestapiWithAxios</NavLink>
            <NavLink activeClassName="bg-primary" className="nav-item nav-link text-white text-uppercase mx-2 active" to="/signup">Signup</NavLink>

          </div>
        </div>
      </nav >
    
  </>
  )
}