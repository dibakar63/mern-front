import React from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import {AiOutlineDownload} from 'react-icons/ai'
import axios from 'axios'
import { useAuth } from './context/authContext'
import { NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'

const Navbar = () => {
   
  const [auth,setAuth]=useAuth()
  //const navigate=useNavigate()
  const handleClick=()=>{
    setAuth({
      ...auth,
      user:null,
      token:""

    })
    localStorage.removeItem("auth")
    toast.success("Logout successfully")
    
  }
  
  return (
    <div className='Navbar'>
    
    {!auth.user ?
      <>   <li className="nav-item">
          <NavLink className="nav-link"  to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/login">Login</NavLink>
        </li>
        </> :<>
        <li className="nav-item">
          <p style={{marginRight:"17px"}}>Logged in as {auth.user.email}</p>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" onClick={handleClick}  to="/login">Logout</NavLink>
        </li></>
        

    }   
    </div>
  )
}

export default Navbar
