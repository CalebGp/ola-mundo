import s from "./Menu.module.css";
import MenuLink from "../MenuLink";
const Menu = () => {
  return (
    <header>
      <nav className={s.navigation}>
        <MenuLink path={"/"} label={"Home"} />
        <MenuLink path={"/about"} label={"About me"} />
      </nav>
    </header>
  );
};
export default Menu;
