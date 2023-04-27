import React from 'react'
import "./redux.css";
import { useDispatch, useSelector } from 'react-redux'
import { incNumber, decNumber } from './actions/Actions';

const Redux = () => {

    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Increment/Dcerement Counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
            <button className='btn' onClick={() => dispatch(decNumber())} >-</button>
            <span className='text' >{myState}</span>
            <button onClick={() => dispatch(incNumber())} className='btn' >+</button>
        </div>
    </div>
  )
}

export default Redux