import React,{ useState } from "react"


function Condition() {
    const[num,setNum]=useState(0);
  return (
    <div>
        <h1>Number: {num}</h1>
        <h2>{num%2===0?'Even Number':'Odd Number'}</h2>
      <button className= " btn btnInfo" onClick={()=>{if(num<10)setNum(num+1)} }>Increment</button>
    </div>
  )
}

export default Condition
