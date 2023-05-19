import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../provider/AuthProvider'

const Navbar = () => {
     const [userName, setUserName] = useState(false)
  const { user, logOut } = useContext(authContext)
//   console.log(user?.photoURL)

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/alltoys">All Toys</Link>
      </li>
      <li>
        <Link to="/blogs">Blog</Link>
      </li>
      <li>
        <Link to="/products/mytoys">My Toys</Link>
      </li>
      <li>
        <Link to="/addtoys">Add Toys</Link>
      </li>

      <li>
        <Link className="text-info font-bold" to="/register">
          REGISTER
        </Link>
      </li>
    </>
  )
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">TeddyWorld</Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-2 space-x-8">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="md:mr-8 ">
            {!user ? (
              <button className="btn btn-sm btn-outline btn-info">
                <Link to="/login">Login</Link>
              </button>
            ) : (
              <div className="flex items-center relative ">
                <button
                  onClick={logOut}
                  className="btn btn-sm btn-outline btn-info mr-8"
                >
                  <Link>LogOut</Link>
                </button>


                <span className={userName? 'showName': 'hidden'}><span className='bg-black  text-white uppercase py-2 px-4 rounded'>{user?.displayName}</span></span>
                <div
                onMouseEnter={()=> setUserName(true)}
                onMouseLeave={()=> setUserName(false)}
                className="avatar online">
                  <div className="w-12 rounded-full">
                    <img width={24} height={24} src={user && user?.photoURL} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
