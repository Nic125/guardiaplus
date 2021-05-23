import React from 'react';
import '../assets/css/Datainput.css';
import { NavLink } from 'react-router-dom';
import Goback from './Goback';

function Datainput() {
    
    return (
        <div className="datainput">
        <Goback />
            <h3>Carga de datos</h3>
            <div className="row options">
            
                <div className="col-6">
                    <div className="input-button">
                    <h3>1</h3>
                    <NavLink to="/departments"><p>Departamentos</p></NavLink>
                    </div>
                
                </div>
                <div className="col-6">
                    <div className="input-button">
                    <h3>2</h3>
                    <NavLink to="/services"><p>Servicios</p></NavLink>
                    </div>
                </div>
            </div>
            <div className="row options">
                <div className="col-6">
                    <div className="input-button">
                        <h3>3</h3>
                        <NavLink to="/guard"><p>Guardias, Turnos...</p></NavLink>
                    </div>
                </div>
                <div className="col-6">
                    <div className="input-button">
                    <h3>4</h3>
                        <NavLink to="/personal"><p>Personal</p></NavLink>
                    </div>
                </div>
            </div>
            <div className="row options">
                <div className="col-6">
                    <div className="input-button">
                    <h3>5</h3>
                        <p>Licencias</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="input-button">
                    <h3>6</h3>
                        <p>Feriados</p>
                    </div>
                </div>
            </div>
        </div>

       
    )
}

export default Datainput;