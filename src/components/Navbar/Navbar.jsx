import { NavLink } from "react-router";


const Navbar = () => {
    const links = (
        <div className="md:flex gap-4">
            <li className="text-xl">
                <NavLink
                    to={'/'}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md"
                            : "hover:text-blue-500 px-3 py-2 rounded-md"
                    }
                >
                    Statistics
                </NavLink>
            </li>
            <li className="text-xl">
                <NavLink
                    to={'/applied'}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md"
                            : "hover:text-blue-500 px-3 py-2 rounded-md"
                    }
                >
                    Applied Jobs
                </NavLink>
            </li>
            <li className="text-xl">
                <NavLink
                    to={'/blog'}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md"
                            : "hover:text-blue-500 px-3 py-2 rounded-md"
                    }
                >
                    Blog
                </NavLink>
            </li>
            <li className="text-xl">
                <NavLink
                    to={'/about'}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md"
                            : "hover:text-blue-500 px-3 py-2 rounded-md"
                    }
                >
                    About
                </NavLink>
            </li>
            <li className="text-xl">
                <NavLink
                    to={'/contact'}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md"
                            : "hover:text-blue-500 px-3 py-2 rounded-md"
                    }
                >
                    Contact
                </NavLink>
            </li>
        </div>
    );

    return (
        <div className="navbar bg-base-100 min-w-[200px] px-4 md:px-8">
            <div className="navbar-start">
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
                <NavLink to='/'>
                    <a className="btn btn-ghost normal-case text-xl md:text-2xl font-bold">
                        Career<span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Hub</span>
                    </a>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                    Start Applying
                </a>
            </div>
        </div>
    );
};

export default Navbar;
