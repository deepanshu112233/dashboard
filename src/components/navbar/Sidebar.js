import React from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

const Sidebar = () => {
  return (
    <div className=''>
      <div className='sidenavbar'>
        <h2>
        ICON HEADING
        <br/>
        <hr/>
        </h2>
      <ul className='sidebarlist'>
        {SidebarData.map((val,key)=>{
          return (<li
          className='sidebarrow' 
          key={key} 
          >
            <Link
                to={val.link}
                className={`${
                    window.location.pathname === val.link ? 'active' : ''
                } sidebar-link`}
                >
                <div className=''>
                    <div className='icon'>{val.icon}</div>
                    <div className='title'>{val.title}</div>
                </div>
            </Link>
          </li>)
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
        })}
      </ul>
      </div>
    </div>
  );
}

export default Sidebar
