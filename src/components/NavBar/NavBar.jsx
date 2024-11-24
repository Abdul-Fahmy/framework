import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="bg-secondary-900 text-white py-9 relative">
        <div className="container flex justify-between items-center">
          <Link className="md:text-3xl font-bold uppercase px-2" to={"/"}>
            Start Framework
          </Link>
          <ul className="hidden md:flex gap-8">
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `font-bold uppercase ${
                    isActive ? "px-4 py-3 bg-primary-900 rounded-md" : ""
                  }`;
                }}
                to={"about"}
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `font-bold uppercase ${
                    isActive ? "px-4 py-3 bg-primary-900 rounded-md" : ""
                  }`;
                }}
                to={"portfolio"}
              >
                portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `font-bold uppercase ${
                    isActive ? "px-4 py-3 bg-primary-900 rounded-md" : ""
                  }`;
                }}
                to={"contact"}
              >
                contact
              </NavLink>
            </li>
          </ul>
          <div
            className="nav-menu px-3 md:hidden border-2 rounded-md mr-3"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <i className="text-white fa-solid fa-bars text-xl cursor-pointer"></i>
          </div>
          {toggle && (
            <ul className="md:hidden absolute top-full left-0 right-0 bg-secondary-900 flex flex-col h-44 justify-center gap-8 px-4 z-10">
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return `font-bold uppercase ${
                      isActive ? "px-4 py-3 bg-primary-900 rounded-md" : ""
                    }`;
                  }}
                  to={"about"}
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return `font-bold uppercase ${
                      isActive ? "px-4 py-3 bg-primary-900 rounded-md" : ""
                    }`;
                  }}
                  to={"portfolio"}
                >
                  portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return `font-bold uppercase ${
                      isActive ? "px-4 py-3 bg-primary-900 rounded-md" : ""
                    }`;
                  }}
                  to={"contact"}
                >
                  contact
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}
