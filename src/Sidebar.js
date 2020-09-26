import React from "react";
import './Sidebar.css'
import { Button } from '@material-ui/core';
import Twittericon from "@material-ui/icons/Twitter"
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from "@material-ui/icons/Search"
import { NotificationsNone } from "@material-ui/icons";

function Sidebar (){


    return(
        <div className = "sidebar">

            {/* Twitter Icon */}
            <Twittericon />
            <SidebarOption Icon ={HomeIcon} text ="Home" />
            <SidebarOption Icon={SearchIcon} text ="Explore" />
            <SidebarOption Icon ={NotificationsNone} text ="Notifications" />


            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}

            { /* Button -> Tweet */}
        </div>
    )
}

export default Sidebar;