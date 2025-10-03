
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">CS — Ticket System</a>
      </div>
      <div className="navbar-end">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
            <li>
              <a className="btn bg-gradient-to-r from-purple-700 to-purple-400 text-white w-full">
                + New Ticket
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center gap-5">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
          <a className="btn bg-gradient-to-r from-purple-700 to-purple-400 text-white">
            + New Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;