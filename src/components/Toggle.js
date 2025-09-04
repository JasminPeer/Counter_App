import React, { useState } from "react";
import bottle from "../images/bottle-removebg-preview.png";

function Toggle() {
  const [count, setCount] = useState(1); 

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", maxWidth: "600px", margin: "20px auto" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        
  
        <div style={{ flex: "0 0 100px", textAlign: "center" }}>
          <img src={bottle} alt="bottle" style={{ width: "80px" }} />
        </div>

   
        <div style={{ flex: 1, marginLeft: "15px" }}>
          <h4 style={{ margin: "5px 0" }}>Cronus HydroMax Inspire Bottle</h4>
          <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>Pack of 1, Purple, 2L</p>
          <p style={{ margin: "5px 0" }}>
            <span style={{ textDecoration: "line-through", color: "#888" }}>₹649</span> &nbsp;
            <span style={{ fontWeight: "bold" }}>₹289</span> &nbsp;
            <span style={{ color: "green" }}>55% Off</span>
          </p>

          <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
            <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
            <input
              type="text"
              value={count}
              readOnly
              style={{
                width: "40px",
                textAlign: "center",
                margin: "0 10px"
              }}
            />
            <button onClick={() => setCount(count < 10 ? count + 1 : 10)}>+</button>

            <button style={{ marginLeft: "20px", background: "none", border: "none", color: "blue", cursor: "pointer" }}>
              Save for later
            </button>
            <button style={{ marginLeft: "10px", background: "none", border: "none", color: "red", cursor: "pointer" }}>
              Remove
            </button>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "right", marginTop: "20px" }}>
        <button style={{ backgroundColor: "orange", padding: "8px 20px", border: "none", borderRadius: "4px", fontWeight: "bold" }}>
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}

export default Toggle;
