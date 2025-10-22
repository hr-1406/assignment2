import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg nav-gradient">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Employee Dashboard</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarContent" aria-controls="navBarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navBarContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink end className={({isActive}) => `nav-link ${isActive ? 'active':''}`} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => `nav-link ${isActive ? 'active':''}`} to="/employee/new">Employee Form</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
