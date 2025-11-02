import UserAdd from "./UserAdd"
import UserEdit from "./UserEdit"
import UserList from "./UserList"
import {Route, Routes, NavLink} from "react-router"

const App = () => {

  return (
    <div>

      <ul className="flex justify-around ">
        <li>
          <NavLink to="/">List</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add User</NavLink>
        </li>
      </ul>

       {/* <h1>Make Routes and Pages for Add user and user List UI</h1> */}
       <Routes>
        <Route path="/" element={<UserList />}/>
        <Route path="add" element={<UserAdd />}/>
        <Route path="/edit/:id" element={<UserEdit />}/>
       </Routes>

    </div>
  )
}

export default App