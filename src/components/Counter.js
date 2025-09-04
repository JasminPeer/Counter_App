
import React,{useState} from "react";
import bottle from '../images/bottle-removebg-preview.png'

function Counter() {
const[num,setNum]=useState(1);
  return (
   <div>
    <div className='container'>
        <div className="row">
          <div className="col-md-2">
<img src={bottle} alt='bottle'/>
<div className="d-flex">

<button className=" mt-4" onClick={()=>{if(num>0)setNum(num-1)}}>-</button>
<input type='number' value={num} className=" mt-4" style={{width:'30px'}}/>

<button className=" mt-4" onClick={()=>{if(num<5)setNum(num+1)}}>+</button>
</div>
          </div>
          <div className="col-md-5" >
<h6>pexpo Craft Pro Ombre Shades Sports and Hiking Stainles..</h6>
<p className="text-secondary">Pack of 1, Purple, Pink, Steel</p>
<p className="text-secondary">Seller:PLACERO</p>
<p className="text-secondary"> <del className="me-2">₹649 </del> <b className="text-dark me-2">₹289</b> <b className="me-2 text-success"> 55% Off</b> </p>
<div className="d-flex">
<h5 className="me-5">Save for later</h5>
<h5>Remove</h5>
</div>
          </div>
          <div className="col-md-3">
<h6 className="text-secondary">Delivery by Sun Aug 10</h6>
          </div>
        </div>

    </div>

   </div>
  )
}

export default Counter
