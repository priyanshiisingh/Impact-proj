import "./menu.css";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Menu = () => {
  return (
    <div>
      <nav className="navigation">
        <ul className="mainmenu">
          <li>
            <a href="">Home</a>
          </li>

          <li>
            <label htmlFor="dropdown" className="label1">
              Dropdown
              <span className="span1">
                <ChevronDownIcon />
              </span>
            </label>
            <input type="checkbox" id="dropdown" />
            <ul className="submenu">
              <li>
                <a href="">Menu One</a>
              </li>
              <li>
                <label htmlFor="menu-two">
                  Menu Two
                  <span className="span2">
                    <ChevronDownIcon />
                  </span>
                </label>

                <input type="checkbox" id="menu-two" />
                <ul className="sub-submenu">
                  <li>
                    <a href="#">Sub Menu One</a>
                  </li>
                  <li>
                    <a href="#">Sub Menu Two</a>
                  </li>
                  <li>
                    <a href="#">Sub Menu Three</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Menu Three</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
