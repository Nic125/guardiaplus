import React, { useLayoutEffect } from 'react';

function ServiceForm(props) {
    const csrftoken = window.CSRF_TOKEN;
    const value = props.value

    useLayoutEffect(() => {
        document.getElementById('service-name').value=props.value;
    });

    return (
        <div className="services-form">
        <form method="post" className="form-input">
            <input name="csrfmiddlewaretoken" value={csrftoken} hidden />
            { props.value ? <p><i>Modificar</i></p> : null }
            <input className="Inputext" type="text" id="service-name" name="username" placeholder="Nombre de servicio" required />
            <button type="submit" className="btn btn-outline-success"><i class="bi bi-check-lg"></i></button>
            
        </form>
        </div>
    )
}

export default ServiceForm;