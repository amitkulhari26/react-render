import React, { useState } from 'react'

const initialState = ['Batman', 'Superman']
const ArrayUseState = () => {
    console.log('ArrayUseState Component Rendering ...')
    const [state, setState] = useState(initialState)
    const addNamehandler = () => {
        // mutating orignal array
        // will not re-render
        // state.push('Sarita');
        // setState(state);

        // to re-render, make a copy
        setState([...state, 'Spiderman'])
    }

    return (
        <div>
            <button onClick={() => addNamehandler()}>Add Name</button>
            {
                state.map(name => (<h2 key={name}>{name}</h2>))
            }
        </div>
    )
}

export default ArrayUseState
