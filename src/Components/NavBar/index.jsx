import React from "react";
import { Link } from "react-router";

export default function NavBar({onSearch}) {
  const routes = [
    { path: "/", name: "Home" },
    { path: "/movies", name: "Movies" },
    { path: "/tvSeries", name: "Tv Series" },
    { path: "/contactUs", name: "Contact us" },
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="flex-1 flex items-center gap-6 container">
        <a className="btn btn-ghost text-xl">Movies</a>

        <ul className="menu menu-horizontal px-1 hidden md:flex gap-2">
          {routes.map((route) => (
            <li key={route.name}>
              <Link to={route.path} className="hover:text-amber-500">
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="text"
          onChange={(e)=>{onSearch(e.target.value)}}
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
