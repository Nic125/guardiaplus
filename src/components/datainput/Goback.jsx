import React from 'react';
import { NavLink } from 'react-router-dom';

function Goback(){
    return(
        <div className="goback">
            <NavLink to='/inputs'><i class="bi bi-arrow-return-left"></i></NavLink>
        </div>
    )
}

export default Goback;