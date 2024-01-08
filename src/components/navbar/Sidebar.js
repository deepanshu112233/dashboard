import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import {IconContext} from 'react-icons'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className='' style={{zIndex:'100'}}>
      
      
      
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars" style={{marginLeft:'2%'}}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.link}>
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

export default Sidebar

        //   return <li
        //   className='sidebarrow' 
        //   id={window.location.pathname===val.link ? "active" : ""}
        //   key={key} 
        //   onClick={()=>window.location.pathname=val.link}
        //   >{" "}
        //     <div id='icon'>{val.icon}</div>{" "}
        //     <div id='title'>{val.title}</div>
        //     {/* <Link to="www.googl.com"></Link> */}
        //   </li>