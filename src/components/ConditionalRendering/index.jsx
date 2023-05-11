import React, { Fragment, useState } from 'react';
import { Button } from '../Button/Button';

export const ConditionalRendering = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    let handleClick = () => {
        setIsLoggedIn(!isLoggedIn)
    }

     let handleChange = (e) => {
        console.log(e.target.value)
     }

    return (
        <Fragment>
            <h2 onClick={handleClick}>Renderizado condicional</h2>
            { isLoggedIn ? <p>"Logueado"</p> : <Button/> }
            <div>
                <input type="text" onChange={handleChange} />
            </div>
        </Fragment>
    )
} 