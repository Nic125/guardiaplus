import React, { useState, prevCount, useEffect } from 'react';
import ServiceForm from './ServiceForm';
import Goback from './Goback';
import useToggle from '../../UseToggle';



function Services() {

    const [show, setShow] = useToggle();
    const [selected, setSelected] = useState('');
    const [selectedService, setSelectedService] = useState(null);

   
    function addValue(event){
        const newValue = event.target.name;
        setSelectedService(newValue)
        setShow()
        return newValue
    }

    useEffect(function addValue(event){
        const newValue = event.target.name;
        setSelectedService(newValue)
        setShow()
        return newValue
    }, [selectedService])

    function newEntry(){
        setSelectedService('')
        setShow()
    }


    return (
        
        <div className="services">
            <Goback />

            <select onChange={event => setSelected(event.target.value)} required>
                <option value="" disabled hidden selected>Selecione departamento</option>
                <option value="Dto Medico">Dto Medico</option>
                <option value="Enfermería">Enfermería</option>
                <option value="Servicios Generales">Servicios Generales</option>
            </select>
            {selected.length > 1 && show ? <ServiceForm value={selectedService} /> : null}
            
            <button className="btn btn-outline-success new-entry" onClick={selected.length > 1 ? newEntry : null}>{selected.length > 0 && show ? <i class="bi bi-x"></i> : <i class="bi bi-plus"></i>}</button>
            
            

            <table className="table">
                <thead>
                    <tr>
                        <th className="th-name" scope="col">Servicios</th>
                        <th className="th-option" scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td-name" scope="row">Medicina general</td>
                        <td className="td-option">
                            <button className="btn btn-outline-success" name="Medicina General" onClick={selected.length > 1 ? addValue : null}><i class="bi bi-pencil-square"></i></button>
                            <button className="btn btn-outline-success"><i class="bi bi-trash"></i></button></td>
                    </tr>
                    <tr>
                        <td className="td-name" scope="row">Pediatría</td>
                        <td className="td-option">
                            <button className="btn btn-outline-success" name="Pediatría" onClick={selected.length > 1 ? addValue : null}><i class="bi bi-pencil-square"></i></button>
                            <button className="btn btn-outline-success"><i class="bi bi-trash"></i></button></td>
                    </tr>
                    <tr>
                        <td className="td-name" scope="row">Cirugía</td>
                        <td className="td-option">
                            <button className="btn btn-outline-success" name="Cirugía" onClick={selected.length > 1 ? addValue : null}><i class="bi bi-pencil-square"></i></button>
                            <button className="btn btn-outline-success"><i class="bi bi-trash"></i></button></td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}



export default Services;