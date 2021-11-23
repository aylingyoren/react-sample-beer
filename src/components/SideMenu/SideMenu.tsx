import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { SidebarData } from './SidebarData';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import "./SideMenu.css";

function SideMenu(): JSX.Element {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{ color: '#ffffff', size: '24px'}}>
            <div className='navbar'>
                <Link to="#">
                    <Menu className='menu' onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
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
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>    
        </>
    );
}
export default SideMenu;