import { NavLink } from "react-router";


const Navbar = () => {
    const links = (
        <>
            <li><NavLink to={'/'} className="hover:text-blue-500">Statistics</NavLink></li>
            <li><NavLink to={'/applied'} className="hover:text-blue-500">Applied Jobs</NavLink></li>
            <li><NavLink to={'/blog'} className="hover:text-blue-500">Blog</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 min-w-[200px] px-4 md:px-8">
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Dropdown Menu for Small Screens */}
                <div className="dropdown">
                    <button
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
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
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                {/* Logo */}
                <a className="btn btn-ghost normal-case text-xl md:text-2xl font-bold">
                    CareerHub
                </a>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                <a className="btn bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white">
                    Start Applying
                </a>
            </div>
        </div>
    );
};

export default Navbar;
