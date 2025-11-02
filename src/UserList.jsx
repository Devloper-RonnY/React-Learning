import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const UserList = () => {
  const [userData, setUserData]=useState([]);
  const [loading, setLoading]=useState(false);
  const navigate = useNavigate();
  const url="http://localhost:5000/users"

  useEffect(() => {
    setLoading(true);
    getUserData();
  },[])

  const getUserData=async()=>{
    let response= await fetch(url);
    response = await response.json();
    setUserData(response);
    setLoading(false);
  }

  const deleteUser= async(id)=>{
    let response = await fetch(url+"/"+id,{
      method: "delete"
    })
    response = response.json()
    if(response){
      alert('response recorded')
    }
  }

  const edituser=(id)=>{
    navigate('/edit/'+id)
    
  }
  

  return (
    <div>
      <ul  className='flex justify-between px-10 border-1 font-semibold'>
        <li>Name</li>
        <li>age</li>
        <li>email</li>
        <li>action</li>
      </ul>

      {
        !loading ? 
        userData.map((user) =>(
          <ul className='flex justify-between border-1 px-10' key={user.id}>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
            <li>
            <button onClick={() =>deleteUser(user.id)} style={{border: "solid 1px black"}}>Delete</button>
            <button onClick={()=>edituser(user.id)} style={{border: "solid 1px black"}}>Edit</button>
            </li>
          </ul>
        )) 
        : <h1>Data Loadiing...</h1>
      }
    </div>
  )
}

export default UserList