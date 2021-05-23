import React from 'react';

function PersonalForm() {
    const csrftoken = window.CSRF_TOKEN;
    return (
        <div className="personal-form">
        <form method="post" className="form-input">
            <input name="csrfmiddlewaretoken" value={csrftoken} hidden />
            <input className="Inputext" type="text" name="username" placeHolder="Nombre" required />
            <input className="Inputext" type="text" name="username" placeHolder="Apellido" required />
            <input className="Inputext" type="text" name="username" placeHolder="Legajo" required />
            <input className="Inputext" type="text" name="username" placeHolder="Función" required />
            <input className="Inputext" type="text" name="username" placeHolder="Teléfono" required />
            <select required>
                <option value="" disabled hidden selected>Ley</option>
                <option value="Dto Medico">N° 1904</option>
                <option value="Enfermería">N° 1844</option>
               
            </select>
                      
            <button type="submit" className="btn btn-outline-success"><i class="bi bi-check-lg"></i></button>
        </form>
        </div>
    )
}

export default PersonalForm;