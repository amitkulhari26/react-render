import React, { useState } from 'react'

const initialState = {
    fname: 'Amit',
    lname: 'Kulhari'
}

const ObjectUseState = () => {
    console.log(`ObjectUseState Component Render`)
    const [state, setState] = useState(initialState)
    const handlNameChange = () => {
        // muating orignal object
        // will not re-render 
        // state.fname = "amit";
        // state.lname = "kumar";
        // setState(state);
        // to re-render, create a copy of object
        setState({
            fname: 'Rajesh',
            lname: 'Kulhari'
        })
    }

    return (
        <div>
            <h2>{state.fname}</h2>
            <h3>{state.lname}</h3>
            <button onClick={() => handlNameChange()}>Change Name</button>
        </div>
    )
}

export default ObjectUseState
