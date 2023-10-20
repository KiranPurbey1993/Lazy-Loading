import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const params = useParams();
    const id = params.id;
    // console.log(params)
  return (
    <div>
        <h2>Details about User {id}</h2>
    </div>
  )
}

export default UserDetails
