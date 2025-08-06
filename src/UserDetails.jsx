import React from 'react'
import { Link, useParams } from 'react-router'

const UserDetails = () => {
    const userData=useParams();
  return (
    <div style={{textAlign : 'center'}}>
        <h1>User Details</h1>
        <Link to="/users/"><h5>Go Back</h5></Link>
        <h3>User id is : {userData.id}</h3>
    </div>
  )
}

export default UserDetails