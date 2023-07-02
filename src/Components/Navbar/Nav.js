import logo from "../../../public/images/swiggy.svg";
import "./Nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="image-container">
          <img src={logo} />
        </div>
        <div className="location-container">
          <a>
            <span className="highlight">other</span>
            <span>Rudrapur, Uttarakhand, India</span>
            <i class="fa-solid fa-angle-down"></i>
          </a>
        </div>
      </div>
      <div className="nav-right">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-links">
              <i className="fa-solid fa-magnifying-glass"></i>
              Search
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links">
              <i class="fa-solid fa-cookie"></i>
              Offers<sup className="offer">New</sup>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links">
              <i class="fa-solid fa-life-ring"></i>
              Help
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links">
              <i class="fa-solid fa-user"></i>
              Sign In
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links">
              <i class="fa-solid fa-cart-shopping fa-flip-horizontal"></i>
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
