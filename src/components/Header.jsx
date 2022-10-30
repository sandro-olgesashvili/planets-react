import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-logo"><NavLink to="/">THE PLANETS</NavLink></h1>
      <nav className="header-navbar">
        <ul className="header-navbar-ul">
          <li className="header-navbar-li mercury-line">
            <NavLink to="/">mercury</NavLink>
          </li>
          <li className="header-navbar-li venus-line">
            <NavLink to="/Venus">venus</NavLink>
          </li>
          <li className="header-navbar-li earth-line">
            <NavLink to="/Earth">earth</NavLink>
          </li>
          <li className="header-navbar-li mars-line">
            <NavLink to="/Mars">mars</NavLink>
          </li>
          <li className="header-navbar-li jupiter-line">
            <NavLink to="/Jupiter">jupiter</NavLink>
          </li>
          <li className="header-navbar-li saturn-line">
            <NavLink to="/Saturn">saturn</NavLink>
          </li>
          <li className="header-navbar-li uranus-line">
            <NavLink to="/Uranus">uranus</NavLink>
          </li>
          <li className="header-navbar-li neptune-line">
            <NavLink to="/Neptune">neptune</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
