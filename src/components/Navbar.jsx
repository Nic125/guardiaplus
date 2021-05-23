import React from 'react';
import '../assets/css/Navbar.css'
import logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src={logo} className="logo" alt='logo' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <hr></hr>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/"><i class="bi bi-house"></i>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i class="bi bi-calendar3"></i>Planificación</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i class="bi bi-file-bar-graph"></i>Informes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i class="bi bi-people"></i>Personal</a>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/inputs"><i class="bi bi-archive"></i>Carga de datos</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;