import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [theme, setTheme] = useState(()=>{
   return localStorage.getItem('theme')
  });
  const handleToggle = (e) => {

  const ischecked = e.target.checked;
  setTheme(ischecked ? 'abyss' : 'light');
  };
useEffect(()=>{
    localStorage.setItem('theme',theme)
    const localTheme = localStorage.getItem('theme') || 'light'

document.documentElement.setAttribute('data-theme', localTheme)
},[theme])
const isDarkMode = theme === 'abyss';

  return (
    <div className="navbar bg-base-100 shadow-2xl fixed">
      <div className="flex-1">
        <Link to='/'>
        <a className="btn btn-ghost text-2xl text-secondary">
          World's<script type="module" src=""></script><span className="text-primary">Soft</span>
        </a>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex gap-2">
          <NavLink to='/' className={({isActive})=> isActive? 'text-primary font-bold' : 'font-bold'}>
            <a>Home</a>
          </NavLink>
          <NavLink to='blogs' className={({isActive})=>isActive ? 'text-primary font-bold' : 'font-bold'}>
            <a>Blogs</a>
          </NavLink>
          <NavLink to='bookmarks' className={({isActive})=> isActive ? 'text-primary font-bold' : 'font-bold'}>
            <a>Bookmarks</a>
          </NavLink>
        </ul>
      </div>
      <label className="toggle text-base-content">
        <input type="checkbox"
        
        onChange={handleToggle}
        checked={isDarkMode}
        className="theme-controller" />

        <svg
          aria-label="sun"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </g>
        </svg>

        <svg
          aria-label="moon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </g>
        </svg>
      </label>
    </div>
  );
};

export default Nav;
