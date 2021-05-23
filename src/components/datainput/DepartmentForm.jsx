import React from 'react';

function DepartmentForm() {
    const csrftoken = window.CSRF_TOKEN;
    return (
        <div className="department-form">
        <form method="post" className="form-input">
            <input name="csrfmiddlewaretoken" value={csrftoken} hidden />
            <input className="Inputext" type="text" name="username" placeHolder="Nombre de departamento" required />
            <button type="submit" className="btn btn-outline-success"><i class="bi bi-check-lg"></i></button>
        </form>
        </div>
    )
}

export default DepartmentForm;