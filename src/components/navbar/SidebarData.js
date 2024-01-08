import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import * as IoIcons from "react-icons/io";

export const SidebarData= [
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/",
        cName:'nav-text',
    },
    {
        title:"Dashboard",
        icon:<DashboardIcon/>,
        link:"/dashboard",
        cName:'nav-text',
    },
    {
        title:"About",
        icon:<IoIcons.IoMdPeople/>,
        link:"/about",
        cName:'nav-text',
    },
    
]