import React from 'react';

function GuardForm() {
    const csrftoken = window.CSRF_TOKEN;
    return (
        <div className="guard-form">
        <form method="post" className="form-input">
            <input name="csrfmiddlewaretoken" value={csrftoken} hidden />
            <input className="Inputext" type="text" name="username" placeHolder="Nombre de servicio" required />
            <select required>
                <option value="" disabled hidden selected>Selecione tipo</option>
                <option value="Dto Medico">Guardia</option>
                <option value="Enfermería">Turno</option>
                <option value="Servicios Generales">Consultorio</option>
            </select>
            <select required>
                <option value="" disabled hidden selected>Selecione duración</option>
                <option value="Dto Medico">24hs</option>
                <option value="Enfermería">12hs</option>
                <option value="Servicios Generales">8hs</option>
            </select>
            <div className="form-check">
                <input className="form-check-input checkbox" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                    Activa
                </label>
                </div>
            <button type="submit" className="btn btn-outline-success"><i class="bi bi-check-lg"></i></button>
        </form>
        </div>
    )
}

export default GuardForm;