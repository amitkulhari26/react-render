import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [count, setCount] = useState(0)
    console.log('Parent Component Render')
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Incremnt 1</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(5)}>Incremnt 5</button>
            <Child />
        </div>
    )
}

export default Parent

/*
When a parent component renders, React will recursively rendes all of it's child component

New State  same as Old State  after inital render ? Both parent and child component do not render

New State same as Old state after re-render ? Parent component will render one more time but child never re-renders


DOM represented by Child component is never updated
Child component went through the rendering phase, but discarted during diff
so not went through commit phase
this is known as "Unnecessary render"
*/