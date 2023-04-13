import React,{useState,useRef} from 'react'
import Componentdel from './Componentdel';

export default function Hooks() {
   const [val,setval]=useState(0)
  return (
   <>
    <div>{val}</div>
    <button onClick={()=>setval(val+1)}>Counter</button>
  </>
  )
}
