import { Link, Outlet } from 'react-router'
import './header.css'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
  <div>
    <div className='header'>
        <div className='logo'>
            <Link className='link' to='/'><h2>Logo</h2></Link>
        </div>
        <div>
            <ul>
                <li><NavLink className='link' to='/'>Home</NavLink></li>
                <li><NavLink className='link' to='/about'>About</NavLink></li>
                <li><NavLink className='link' to='/login'>Login</NavLink></li>
                <li><NavLink className='link' to='/college'>College</NavLink></li>
                <li><NavLink className='link' to='/users'>Users</NavLink></li>
                <li><NavLink className='link' to='/users/lists'>Lists</NavLink></li>
            </ul>
        </div>
    </div>
        <Outlet />
  </div>
  )
}

export default NavBar