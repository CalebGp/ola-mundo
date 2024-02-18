import { Link, useLocation } from "react-router-dom";
import "./menu.css";
const Menu = () => {
  const location = useLocation();
  console.log(location);
  const state = location.pathname === "/" ? "-highlight" : "";
  return (
    <header>
      <nav className="navigation">
        <Link className={`link${state}`} to="/">
          Inicio
        </Link>
        <Link className={`link${state}`} to="/about">
          Sobre Mim
        </Link>
      </nav>
    </header>
  );
};
export default Menu;
