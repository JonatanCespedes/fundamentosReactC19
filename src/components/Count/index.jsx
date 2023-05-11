import { useState } from "react";

export const Count = () => {
    const [ count, setCount ] = useState(0);
    
    const increment = () => {
        setCount(count + 1)
    }
    
    const decrement = () => {
        setCount(count > 0 ? count - 1 : 0)
    }
    
    return (
        <>
            <h2>Contador - Hook useState</h2>
            <div>
                <button onClick={decrement}>
                    -
                </button>
                <p>{ count }</p>
                <button onClick={increment}>
                    +
                </button>
            </div>
        </>
    )
}