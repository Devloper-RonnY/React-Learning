import { Link } from "react-router"

const Users = () => {
    const userList=[
        {id: 1,name: "Roshan"},
        { id: 2, name: "Bhavesh"},
        { id: 3,name: "Atharv"},
    ]
  return (
    <div className='userLink'>
        <h1>User List</h1>
        {
            userList.map((item,index) => (
                <div key={index} style={{textAlign :"center"}}>
                    <Link to={"/users/"+item.id+"/"+item.name}>{item.name}</Link>
                </div>
            ))
        }
    </div>
  )
}

export default Users