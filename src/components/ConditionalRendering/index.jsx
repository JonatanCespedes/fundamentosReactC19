import React, { Fragment, useState } from 'react';
import { Button } from '../Button/Button';

export const ConditionalRendering = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

     let handleChange = (e) => {
        console.log(e.target.value)
     }

     let handleUserLogin = () => setIsLoggedIn(!isLoggedIn)
     let handleUserLogout = () => setIsLoggedIn(!isLoggedIn)

    return (
        <Fragment>
            <h2>Renderizado condicional</h2>
            { isLoggedIn ?
            <div>
                <p>"Logueado"</p> 
                <Button text="Logout" className="btn-green" handleClick={handleUserLogout} />
            </div> :
            <Button text="Login" className="btnStyled" handleClick={handleUserLogin} /> }
            <div>
                <input type="text" onChange={handleChange} />
            </div>
        </Fragment>
    )
} 