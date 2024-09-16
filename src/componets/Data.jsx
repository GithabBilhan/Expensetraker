import React, { useState } from 'react'
import "./Data.css"
import Header from './Header'
function Data(props) {
  const [statimg,setimg]=useState(false)
  const [statname,setname]=useState("")
  const [statage,setage]= useState("")

  const  onsubmit =(e)=>{


    e.preventDefault()

  }
  
  const ontarget =(e)=>{
setname(e.target.value)
console.log(statname);

  }
  const ontarget2 =(e)=>{
    setage(e.target.value)
    console.log(statage);
    
      }
function inputobj() {
 let a = {
Name:statname,
age:statage,
  }
  props.data(a)

  setname("")
  setage("")
  function img(){


  }
  img()
  
}
  return (

  
    <form onSubmit={onsubmit} action="">
<h1>Work exam</h1>
<input onChange={ontarget} value={statname} placeholder='Name' type="text" />

<input onChange={ontarget2} value={statage} placeholder='Age' type="number" />

<button onDoubleClick={props.clikmos} onClick={inputobj}>clik</button>
    </form>
  )
}

export default Data
