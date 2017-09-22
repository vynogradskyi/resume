import React from 'react';
import {NavLink} from 'react-router-dom';


export default () => {
    return (
        <div>
            <div>
                Valentyn Vynogradskyi
            </div>
            <NavLink to="/hr-view">HR View</NavLink>
            <NavLink to="/presentational-view">Presentational View</NavLink>
        </div>
    )
}