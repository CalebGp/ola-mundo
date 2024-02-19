import s from "./MenuLink.module.css";
import { NavLink } from "react-router-dom";
const MenuLink = ({ path, label }) => {
  return (
    <NavLink
      className={({ isActive }) => `
    ${s.link} 
    ${isActive ? `${s.highlight}` : ""}
`}
      to={path}
      end
    >
      {label}
    </NavLink>
  );
};
export default MenuLink;
