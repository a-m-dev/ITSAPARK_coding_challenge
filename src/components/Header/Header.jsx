import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../../images/logo.png";
import PublicRoutes from "../../utils/PublicRoutes";
import "./Header.scss";

const Header = () => {
  const getMenuData = useMemo(() => {
    return [
      { id: 0, to: PublicRoutes.BruteForceWay, label: "Brute-Force" },
      { id: 1, to: PublicRoutes.WorkerWay, label: "Web Worker" },
      { id: 2, to: PublicRoutes.AdvanceWay, label: "Advance" },
    ];
  }, []);

  return (
    <header className="container header">
      <div className="header__logo">
        <NavLink to={PublicRoutes.Home}>
          <img src={LOGO} alt="Itsapark" className="header__logo" />
        </NavLink>
      </div>

      <nav className="header__menu">
        <ul>
          {getMenuData.map(({ id, to, label }) => (
            <li key={id}>
              <NavLink to={to} activeClassName="header__menu--active">
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
