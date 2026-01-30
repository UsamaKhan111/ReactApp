import { NavLink } from "react-router-dom";

function Header({ user, isLoggedIn, logout }) {

    return (
        <nav className='w-full h-14 bg-black flex justify-between px-4 md:px-6 items-center sticky top-0 z-50'>
            <div className='text-2xl text-orange-400 font-bold cursor-pointer'><NavLink to="/">Ghost</NavLink></div>
            <div className='text-white'>
                <ul className='md:flex hidden justify-between gap-6'>
                    <li className="mx-14">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-xl font-bold cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500" : ""
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>                <li className="mx-14">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `text-xl font-bold cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500" : ""
                                }`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="mx-14">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `text-xl font-bold cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500" : ""
                                }`
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <div className="bg-orange-400 px-3 py-2 rounded-xl cursor-pointer font-bold">
                    {!user &&  (
                        <NavLink to="/signup">
                            Signup
                        </NavLink>
                    )}
                    {user && !isLoggedIn && (
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    )}
                    {isLoggedIn && (
                        <button
                            onClick={logout}
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>

            {/* <div className='md:hidden  '>
                <button className='text-4xl bg-orange-400 rounded-lg mx-1 px-2'>&#8801;</button>
            </div> */}
        </nav>
    )
}

export default Header