import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
    console.log('UseState Component Rendering ...')
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Incremnt 1</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(5)}>Incremnt 5</button>
        </div>
    )
}

export default UseState

/*
Important Note:
1> After Initail Render if we call the setter fn of useState or
dispatch fn of useReducer and set the save value, component will
be bailed out
2> After one or many re-render if we call the setter fn of useState or
dispatch fn of useReducer and set the save value, component will
be re-rendred once and after that it will be bailed out

*/

/*
(Rendering is not the same as updating the DOM, because a component maybe rendered without any
invisible changes (discared in reconciliation ))

When we run react application , the code(JSX) written in our Components get translated into
React Elements and that(React Elements) is mounted in DOM

React handle this above process into two phase
1> Render phase
2> Commit phase
<****** Initial Render *******>
Render Phase => During this process react will start at root of the component tree
and goes downward to the leaf or child compoents, while traversing for each of the component
react invokes "createElement()" method and converts each component's JSX into React Element and store
that render output

React Elements => are basically javascript objects that describes the structure
of UI

Once the JSX to React Elements conversion is done for all the components tree
all React Elements are handed to Commit Phase

Commit phase => in the commit phase React Elements are mounted or applied to the DOM using react-dom package

<****** Initial Render *******>

<******  Re-Render *******>

Re-Render happen because of state or prop change in the comonent

Duiring re-render react again start at root compoent and goes downwards
to the leaf or child component and find all the components that are marked for
re-rendering, a component can mark itself for re-rending by calling useState hook's setter
function or dispatch function or useReducer

Once React is done with finding all the marked components it start converting
all marked component's JSX into React Elements by invoking "createElement()" method on these marked components

Once this conversion (JSX to React Elements) for marked components and affected components by marked
components is finished, React will compare the new set of React Elements  with the once
that were genrated from last render

A list is created with all the chages , that need to be reflect in the DOM and
handed over to the Commit phase

Commit phase => in the commit phase React Elements are mounted or applied to the DOM using react-dom package


React diff Old React Elements Tree to Newly created React Elements tree
and decide what compoents change should update the UI, if There is some newly created React Elements are same
as compared to last render (Old react Elements Tree) they will be discarted for updating DOM
This process is known reconciliation

*/