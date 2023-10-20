import React from 'react'
import { Outlet , NavLink} from 'react-router-dom'

const Product = () => {
  return (
    <div style={{textAlign:'center'}}>
      <input type='search ...' />
      <br/>
      <div style={{display:'flex', gap:'10px', justifyContent:'center'}}>
        <NavLink to="features">Features</NavLink>
        <NavLink to="new">New</NavLink>
      </div>
    

      <Outlet/>
    </div>
  )
}

export default Product
