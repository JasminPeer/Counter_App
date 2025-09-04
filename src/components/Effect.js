import React, { useEffect, useState } from 'react'

function Effect() {
  const[name,setName]=useState('');
  useEffect( ()=>
  {
    const browse=localStorage.getItem('name');
    if(browse) setName(browse);
  },[]
);
  const handleChange=(e)=>{
    setName(e.target.value);  
    localStorage.setItem('name',e.target.value) ;
  }
  return (
    <div>
   <input type='text' value={name} onChange={handleChange} />
   <p>Hello,{name||'mohamed'}</p>
    </div>
  )
}

export default Effect
