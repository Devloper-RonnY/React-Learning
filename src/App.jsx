import { Navigate, Outlet, Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'
import NavBar from './NavBar'
import Login from './Login'
import PageNotFound from './PageNotFound'
import College from './College'
import Students from './Students'
import Department from './Department'
import CollegeDetails from './CollegeDetails'
import Users from './Users'
import UserDetails from './UserDetails'

const App = () => {
  return (
    <>
    
      <Routes>

        <Route element={<NavBar />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/users/lists?' element={<Users />} />
        <Route path='/users/:id/:name?' element={<UserDetails />} />
        </Route>


        <Route path='/college' element={<College />}>
        <Route index element={<Students />} />
        <Route path='departments' element={<Department />} />
        <Route path='collegedetails' element={<CollegeDetails />} />
        </Route>

        <Route path='/*' element={<PageNotFound />}></Route>
        
         {/* <Route path='/*' element={<Navigate to="/login" />}></Route> */}
      </Routes>
    </>
  )
}

export default App