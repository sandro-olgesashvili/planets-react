import { NavLink } from "react-router-dom";
import arrow from "../assets/icon-chevron.svg";

const MobileNav = ({setMobileOn}) => {
  return (
    <nav className="header-navbar-mobile">
      <ul className="header-navbar-ul-mobile">
        <li className="header-navbar-li mercury-line-mobile">
          <div>
            <span className="circle-mobile color-Mercury "></span>
            <NavLink to="/" onClick={() => setMobileOn(prev => false)}>mercury</NavLink>
          </div>
          <img src={arrow} alt="arrow" className="arrow-mobile" />
        </li>
        <li className="header-navbar-li mercury-line-mobile">
          <div>
            <span className="circle-mobile color-Venus"></span>
            <NavLink to="/Venus" onClick={() => setMobileOn(prev => false)}>venus</NavLink>
          </div>
          <img src={arrow} alt="arrow" className="arrow-mobile" />
        </li>
        <li className="header-navbar-li mercury-line-mobile">
          <div>
            <span className="circle-mobile color-Earth"></span>
            <NavLink to="/Earth" onClick={() => setMobileOn(prev => false)}>earth</NavLink>
          </div>
          <img src={arrow} alt="arrow" className="arrow-mobile" />
        </li>
        <li className="header-navbar-li mercury-line-mobile">
          <div>
            <span className="circle-mobile color-Mars"></span>
            <NavLink to="/Mars" onClick={() => setMobileOn(prev => false)}>mars</NavLink>
          </div>
          <img src={arrow} alt="arrow" className="arrow-mobile" />
        </li>
        <li className="header-navbar-li mercury-line-mobile">
          <div>
            <span className="circle-mobile color-Jupiter"></span>
            <NavLink to="/Jupiter" onClick={() => setMobileOn(prev => false)}>jupiter</NavLink>
          </div>
          <img src={arrow} alt="arrow" className="arrow-mobile" />
        </li>
        <li className="header-navbar-li mercury-line-mobile">
          <div>
            <span className="circle-mobile color-Saturn"></span>
            <NavLink to="/Saturn" onClick={() => setMobileOn(prev => false)}>saturn</NavLink>
          </div>
          <img src={arrow} alt="arrow" className="arrow-mobile" />
        </li>
        <li className="header-navbar-li mercury-line-mobile">
          <div>
            <span className="circle-mobile color-Uranus"></span>
            <NavLink to="/Uranus" onClick={() => setMobileOn(prev => false)}>uranus</NavLink>
          </div>
          <img src={arrow} alt="arrow" className="arrow-mobile" />
        </li>
        <li className="header-navbar-li mercury-line-mobile">
          <div>
            <span className="circle-mobile color-Neptune"></span>
            <NavLink to="/Neptune" onClick={() => setMobileOn(prev => false)}>neptune</NavLink>
          </div>
          <img src={arrow} alt="arrow" className="arrow-mobile" />
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
