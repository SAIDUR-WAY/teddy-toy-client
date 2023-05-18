import { Link } from 'react-router-dom'

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/allToys'>All Toys</Link>
      </li>
      <li>
        <Link to='/blogs'>Blog</Link>
      </li>
      <li>
        <Link to='/myToys'>My Toys</Link>
      </li>
      <li>
        <Link to='/addToys'>Add Toys</Link>
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
          <a className="btn btn-ghost normal-case text-xl"><Link>TeddyWorld</Link></a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-2 space-x-8">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <div className='md:mr-8 '>
               <button className='btn btn-sm btn-outline btn-info'><Link to='/login'>Login</Link></button>
               <button className='btn btn-sm btn-outline btn-info'><Link to='/register'>Register</Link></button>
               
          </div>
          {/* <p>Profile Name</p> */}
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
