import React, { useReducer } from 'react'

const initialCount = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment': return state + 1
        case 'decrement': return state - 1
        case 'reset': return initialCount
        default: return state

    }
}

const UseReducer = () => {
    console.log('UseReducer Component Rendering ...')
    const [count, dispatch] = useReducer(reducer, initialCount)
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => dispatch('increment')}>Incremnt</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
        </div>
    )
}

export default UseReducer
