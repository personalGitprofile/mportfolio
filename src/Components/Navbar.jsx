import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navlink = (
        <>
            <NavLink to="/" className={({ isActive }) =>
                isActive
                    ? "underline font-semibold bg-gradient-to-r from-green-800 to-cyan-700 bg-clip-text text-transparent " // Active link styles
                    : "text-black"
            }>Home</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) =>
                isActive
                    ? "underline font-semibold bg-gradient-to-r from-green-800 to-cyan-700 bg-clip-text text-transparent " // Active link styles
                    : "text-black"
            }>Portfolio</NavLink>
            <NavLink to="/about" className={({ isActive }) =>
                isActive
                    ? "underline font-semibold bg-gradient-to-r from-green-800 to-cyan-700 bg-clip-text text-transparent " // Active link styles
                    : "text-black"
            }>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) =>
                isActive
                    ? "underline font-semibold bg-gradient-to-r from-green-800 to-cyan-700 bg-clip-text text-transparent " // Active link styles
                    : "text-black"
            }>Contact</NavLink>
        </>
    )

    return (
        <div>
            <div className="navbar bg-base-100 px-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            {navlink}
                        </ul>
                    </div>
                    <NavLink to="/" className="pointer text-2xl font-bold bg-gradient-to-r from-green-800 to-cyan-700 bg-clip-text text-transparent">Mr.Murad Hossain</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;