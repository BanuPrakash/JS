import React, { useReducer } from 'react'
import countReducer from './countReducer'

export default function Counter() {
    let [state, dispatch] = useReducer(countReducer, {count:0});

  return (
    <div>
        Count : {state.count} <br />
        <button type="button" onClick={() => dispatch({type:'INCREMENT', payload: 10})}>+</button>
        <button type="button" onClick={() => dispatch({type:'DECREMENT'})}>-</button>
        <button type="button" onClick={() => dispatch({type:'RESET'})}>RESET</button>
    </div>
  )
}
