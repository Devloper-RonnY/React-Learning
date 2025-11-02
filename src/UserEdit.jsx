import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router'

const UserEdit = () => {
    const [name, setName]= useState('');
    const [age, setAge]= useState('');
    const [email, setEmail]= useState('');
    const {id} = useParams();
    const url="http://localhost:5000/users/"+id;
    

    useEffect(()=>{
        getUserData();
    },[])

    const getUserData=async()=>{
        let response = await fetch(url);
        response = await response.json();
        setName(response.name)
        setAge(response.age)
        setEmail(response.email)
        console.log(response);  
    }

    const updateUserData=async()=>{
        console.log(name,age,email);
        const response = await fetch(url,{
            method: "Put",
            body:JSON.stringify()
        })
        response = response.json()
    }
    
    
  return (
    <div style={{textAlign: "center"}}>
        <h1>Edit User details</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter name' style={{border: "1px solid black"}}/>
        <br /><br />
        <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='enter age' style={{border: "1px solid black"}}/>
        <br /><br />
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter email'style={{border: "1px solid black"}}/>
        <br /><br />
        <button onClick={updateUserData} style={{border: "1px solid black"}}>Update User</button>
    </div>
  )
}

export default UserEdit