import React, { useState } from 'react';
import PersonalForm from './PersonalForm';
import Goback from './Goback';
import useToggle from '../../UseToggle'


function Personal() {

    const [show, setShow] = useToggle();
    const [selected, setSelected] = useState("");
    const [selectedServ, setSelectedServ] = useState("");

    return (
        <div className="personal">
            <Goback />
            <select onChange={event => setSelected(event.target.value)} required>
                <option value="" disabled hidden selected>Selecione departamento</option>
                <option value="Dto Medico">Dto Medico</option>
                <option value="Enfermería">Enfermería</option>
                <option value="Servicios Generales">Servicios Generales</option>
            </select>
            <select onChange={event => setSelectedServ(event.target.value)} required>
                <option value="" disabled hidden selected>Selecione servicio</option>
                <option value="Medicina General">Medicina General</option>
                <option value="Pediatría">Pediatría</option>
                <option value="Cirugía">Cirugía</option>
            </select>
            {selectedServ.length > 0 && show ? <PersonalForm /> : null}
            <button className="btn btn-outline-success new-entry" onClick={selectedServ.length > 0 ? () => setShow() : null} >{selectedServ.length > 0 && show ? <i class="bi bi-x"></i> : <i class="bi bi-plus"></i>}</button>
            

            <table className="table">
                <thead>
                    <tr>
                        <th className="th-name" scope="col">Nombre</th>
                        <th className="th-option" scope="col">Función</th>
                        <th className="th-option" scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td-name" scope="row">Andrés Gomez</td>
                        <td className="td-name" scope="row">Generalista</td>
                        <td className="td-option"><button className="btn btn-outline-success" onClick={selectedServ.length > 0 ? () => setShow() : null}><i class="bi bi-pencil-square"></i></button> <button className="btn btn-outline-success"><i class="bi bi-trash"></i></button></td>
                    </tr>
                    <tr>
                    <td className="td-name" scope="row">Andrés Gomez</td>
                        <td className="td-name" scope="row">Generalista</td>
                        <td className="td-option"><button className="btn btn-outline-success" onClick={selectedServ.length > 0 ? () => setShow() : null}><i class="bi bi-pencil-square"></i></button> <button className="btn btn-outline-success"><i class="bi bi-trash"></i></button></td>
                    </tr>
                    <tr>
                    <td className="td-name" scope="row">Andrés Gomez</td>
                        <td className="td-name" scope="row">Generalista</td>
                        <td className="td-option"><button className="btn btn-outline-success" onClick={selectedServ.length > 0 ? () => setShow() : null}><i class="bi bi-pencil-square"></i></button> <button className="btn btn-outline-success"><i class="bi bi-trash"></i></button></td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}

export default Personal;