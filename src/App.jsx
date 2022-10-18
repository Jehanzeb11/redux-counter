import React from 'react';
import './App.css';
import {useSelector , useDispatch} from "react-redux"
import {plus , minus} from './actions/index';

function App() {

  const dispatch = useDispatch()

const {iniSta} = useSelector((state)=>{
  return state
})

const inc =()=>{
  dispatch(plus())
}

const dec =()=>{
  dispatch(minus())
}


  return (
   <>
   <div className="container">

<h1 className='num'>Redux Counter </h1>

<div className='content'>

   <button onClick={inc} className='btn'>+</button>
   <span className='num'>{iniSta}</span>
   <button onClick={dec} className='btn'>-</button>
   </div>
</div>
    
   </>
  );
}

export default App;
