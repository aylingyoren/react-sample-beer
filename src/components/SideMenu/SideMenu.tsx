import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import "./SideMenu.css";

function SideMenu(): JSX.Element {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar((prevValue) => !prevValue);

  return (
    <>
      <IconContext.Provider value={{ color: "#ffffff", size: "30px" }}>
        <div className="navbar">
          <Link className="link" to="#">
            <FaIcons.FaBars className="icon-pd" onClick={toggleSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={toggleSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose className="close-btn icon-pd" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.class}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default SideMenu;
