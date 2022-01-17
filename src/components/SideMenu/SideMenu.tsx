import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import "./SideMenu.css";

function SideMenu(): JSX.Element {
  const [sidebar, setSidebar] = useState(false);

  const wrapper: HTMLElement | any = useRef();

  function addOutsideClickListener() {
    document.addEventListener("click", handleDocumentClick);
  }

  function removeOutsideClickListender() {
    document.removeEventListener("click", handleDocumentClick);
  }

  function onShow() {
    addOutsideClickListener();
  }

  function onHide() {
    removeOutsideClickListender();
  }

  const handleDocumentClick = (e: Event) => {
    if (wrapper && wrapper.current && !wrapper.current.contains(e.target)) {
      setSidebar(false);
    }
  };

  const toggleSidebar = () => {
    setSidebar((prevValue) => !prevValue);
    sidebar ? onShow() : onHide();
  };

  useEffect(() => {
    addOutsideClickListener();
    return () => {
      removeOutsideClickListender();
    };
  }, []);

  return (
    <div ref={wrapper}>
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
            {SidebarData.map((item) => {
              return (
                <li key={item.title} className={item.class}>
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
    </div>
  );
}
export default SideMenu;
