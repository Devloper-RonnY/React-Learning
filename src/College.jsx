  import { NavLink, Outlet } from 'react-router'

const College = () => {
  return (
    <div className='college' style={{textAlign : "center"}}>
        <h1>College Components</h1>
        <h3><NavLink to='/'>Go back Home</NavLink></h3>
        <NavLink to="">Students</NavLink>
        <NavLink to="departments">Departments</NavLink>
        <NavLink to="collegedetails">College Details</NavLink>
        <Outlet />
    </div>
  )
}

export default College