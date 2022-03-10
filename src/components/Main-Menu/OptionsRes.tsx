import "./optionsRes.css";
import {
  HamburgerIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import DrawerComp from "../DrawerSettings/Drawer";

const Resnav = () => {
  return (
    <div className="head">
      <button className="hambtn">
        <DrawerComp />
      </button>
      <nav id="menu">
        <ul className="main-menu clearfix">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">
              Dropdown
              <span className="drop-icon">
                <ChevronDownIcon />
              </span>
              <label
                title="Toggle Drop-down"
                className="drop-icon"
                htmlFor="sm1"></label>
            </a>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <a href="#">Menu One</a>
              </li>
              <li>
                <a href="#">
                  <p className="innerp">
                    Menu Two
                    <span className="drop-icon">
                      <ChevronRightIcon />
                    </span>
                  </p>
                  <label
                    title="Toggle Drop-down"
                    className="drop-icon"
                    htmlFor="sm2"></label>
                </a>
                <input type="checkbox" id="sm2" />
                <ul className="sub-menu">
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
                <a href="#">Menu Three</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Resnav;
