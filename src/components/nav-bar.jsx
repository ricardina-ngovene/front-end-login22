import { NavLink } from "react-router-dom";

const activeStyles = "text-neutral-600";
const inactiveStyles = "text-black";
export const NavBar = () => {
  return (
    
    <nav className="space-x-2">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        Página Inicial
      </NavLink>
      <NavLink
        to={"/login"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        Login 
      </NavLink>
      <NavLink
        to={"/signup"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        Signup
      </NavLink>
       </nav>
  );
};
