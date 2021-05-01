import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div>
             <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              IMDb
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <Link>
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-5x" id="imdb-logo" />             
            </li>
            </Link>
          </ul>
        </div>
      </nav>
            
        </div>
    )
}
