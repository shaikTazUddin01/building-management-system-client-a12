import { NavLink } from "react-router-dom";
import './Navbar.css'
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import { LuLogIn } from "react-icons/lu";
import Swal from "sweetalert2";
import logo from '/mainlogo.png'

const Navbar = () => {
  const { user, handleSignOut } = useAuth()
  const [open, setopen] = useState(true)


  const handleLogOut = () => {
    handleSignOut()
      .then(res => {
        Swal.fire({
          position: "center",
          icon: "warnign",
          title: "successfully you logOut",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(err => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Your email or Password not matching",
          showConfirmButton: false,
          timer: 1500
        });
      })
  }
  const navItem = <>
    {/* <NavLink to={'/'}><li><Home</li></NavLink> */}
    <li><NavLink to={'/'}>
      Home
    </NavLink></li>
    <li><NavLink to={'/apartment'}>
      Apartment
    </NavLink></li>

    {
      user ?
        <div className="pl-2" >
          <div className='flex flex-col lg:justify-center lg:items-center px-5 lg:px-0'  >

            <img src={user?.photoURL ? user.photoURL : ""} alt="img" className='w-10 h-10 border rounded-full' onClick={() => setopen(!open)}
            />


            {
              !open ?
                <div className='lg:mt-48 text-white border border-[#FFFFF]
                                 bg-[#2b2b2b] p-4 mt-10 
                             rounded-md z-20 ml-8 lg:ml-0 lg:mr-48 absolute
                            text-center shadow-lg shadow-[#858585] w-[250px] '>
                  <h1 className='' >{user?.displayName && user.displayName}</h1>
                  {/* <h1 className='lowercase' >{user?.email && user.email}</h1> */}
                  <NavLink to={'/dashboard'} >
                    <li
                      className="bg-[#2b3440]
                                rounded-md 
                                py-2 px-3 
                                text-white mt-2
                                hover:bg-[#082e5f]
                        ">DashBoard</li>
                  </NavLink>
                  <li onClick={handleLogOut}
                    className="bg-[#2b3440]
                                rounded-md 
                                py-2 px-3 
                                text-white mt-2
                                hover:bg-[#082e5f]
                        ">Log Out</li>

                </div>
                :
                <></>
            }
          </div>
        </div>
        :
        <>
          <li><NavLink to={'/login'} className={'text-2xl'}><LuLogIn></LuLogIn></NavLink></li>
          {/* <img src={userImg} alt="" className='w-10 h-10 rounded-full'/> */}

        </>
    }

  </>
  return (
    <div>
      <div className="navbar bg-[var(--bg-primary)] 
      text-white font-bold px-10">
        <div className="navbar-start">
          <div className="dropdown -ml-5">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-[var(--bg-primary)] rounded-box w-52 text-md z-10">
              {navItem}
            </ul>
          </div>
          <div className="hidden lg:flex  w-1/4">
            <a className=" normal-case text-xl flex items-center justify-center gap-2 lg:flex-col" href="/">
              <img src={logo} alt="" className="w-[50%]" />
              <p className="font-sans text-[#f8f8f8] tracking-[5px] text-sm -mt-2">Thunder</p>
            </a>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex w-3/4">
          <ul className="menu menu-horizontal px-1 text-md">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end flex lg:hidden">
          <div className="">
            <a className=" normal-case text-xl flex flex-col items-center justify-center gap-2" href="/">
              <img src={logo} alt="" className="w-[50%] md:w-[25%]"/>
              <p className="font-sans text-[#f8f8f8] tracking-[5px] text-sm -mt-2">Thunder</p>
            </a>
            {/* <ToastContainer></ToastContainer> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;