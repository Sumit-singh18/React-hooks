import React, { useReducer } from 'react'

const UseReducr = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        switch (action.type) {
            case 'Increment':
                return (state + 2)
            case 'Decrement':
                return (state - 2)
            default:
                throw new Error()
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            <h1>{state} </h1>
            <button onClick={() => dispatch({ type: 'Increment' })}>Click to Increment </button>
            <button onClick={() => dispatch({ type: 'Decrement' })}>Click to Decrement </button>

        </div>
    )
}

export default UseReducr