import React from 'react';
import { useNavigate } from 'react-router-dom';
const OrderSummary = () => {
    const navigate = useNavigate();
  return (
    <div style={{display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center',
    gap:'10px'}}>
     <h1>Order Confirmed!</h1>
     <button onClick={()=>navigate(-1)}>Go Back</button> 
    </div>
  )
}

export default OrderSummary
