import React from 'react'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'

const User = () => {
    const navigate = useNavigate();
    const user = [
        {name:"User 1", id:1},
        {name:"User 2", id:2},
        {name:"User 3", id:3},
    ];

    const [searchParams, setSearchParamas] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
  return (
    <div style={{textAlign:'center'}}>
        {
            user.map((item)=><div  style={{cursor:'pointer'}} key={item.id} onClick={()=>navigate(JSON.stringify(item.id))}>{item.name}</div>)
        }
        <br/>

     
      <Outlet/>

      <div>
      <button onClick={()=>setSearchParamas({filter:'active'})}>Active Users</button>
      <button onClick={()=>setSearchParamas({})}>Reset </button>
        
        {showActiveUsers? <h3>Show Active Users</h3> : <h3>Show All Users</h3>}
      </div>
    </div>
   
  )
}

export default User
