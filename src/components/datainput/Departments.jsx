import React, { useState, useCallback } from 'react';
import DepartmentForm from './DepartmentForm';
import Goback from './Goback';
import useToggle from '../../UseToggle'


    function Departments() {

        const [show, setShow] = useToggle();
 
        return (
            <div className="departments">
                <Goback />
                {show ? <DepartmentForm /> : null}
                <button className="btn btn-outline-success new-entry" onClick={() => setShow()}>{ show ? <i class="bi bi-x"></i> : <i class="bi bi-plus"></i>}</button>
                
                <table className="table">
                    <thead>
                        <tr>
                            <th className="th-name" scope="col">Departamento</th>
                            <th className="th-option" scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="td-name" scope="row">Dto Médico</td>
                            <td className="td-option"><button className="btn btn-outline-success" onClick={() => setShow()}><i class="bi bi-pencil-square"></i></button> <button className="btn btn-outline-success"><i class="bi bi-trash"></i></button></td>
                        </tr>
                        <tr>
                            <td className="td-name" scope="row">Enfermería</td>
                            <td className="td-option"><button className="btn btn-outline-success" onClick={() => setShow()}><i class="bi bi-pencil-square"></i></button> <button className="btn btn-outline-success"><i class="bi bi-trash"></i></button></td>
                        </tr>
                        <tr>
                            <td className="td-name" scope="row">Servicios Generales</td>
                            <td className="td-option"><button className="btn btn-outline-success" onClick={() => setShow()}><i class="bi bi-pencil-square"></i></button> <button className="btn btn-outline-success"><i class="bi bi-trash"></i></button></td>
                        </tr>
                    </tbody>
                </table>


            </div>
        )
    }

    export default Departments;