import React, { useState } from 'react'

const UserAdd = () => {
    const [name, setName]=useState('')
    const [age, setAge]=useState('')
    const [email, setEmail]=useState('')

    const createUser= async()=>{
        const url = "http://localhost:5000/users"
        let response = await fetch(url,{
            method: 'Post',
            body:JSON.stringify({name,age,email})
        })
        response = await response.json()
        if(response){
            alert("new user added")
        }
    }

  return (
    <div className='text-center'>
        <h1>Add new User</h1>
        <input style={{border: "1px solid black"}}
        onChange={(e) => setName(e.target.value)}
        type="text" placeholder='enter name'/>
        <br /><br />
        <input style={{border: "1px solid black"}}
        onChange={(e) => setAge(e.target.value)}
        type="text" placeholder='enter age'/>
        <br /><br />
        <input style={{border: "1px solid black"}}
        onChange={(e) => setEmail(e.target.value)}
        type="text" placeholder='enter email'/>
        <br /><br />
        <button onClick={createUser}>Add User</button>
    </div>
  )
}

export default UserAdd