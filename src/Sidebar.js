import React from "react";
import './Sidebar.css'
import { Button } from '@material-ui/core';
import Twittericon from "@material-ui/icons/Twitter"
import SidebarOption from "./SidebarOption";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import ListAltIcon from "@material-ui/icons/ListAlt"
import MailOutlinIcon from "@material-ui/icons/MailOutline"
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
// import MoreHorizonIcon from "@material-ui/icons/MoreHoriz "


function Sidebar (){


    return(
        <div className = "sidebar">

            {/* Twitter Icon */}
            <Twittericon className ="sidebar_twitterIcon"/>
            <SidebarOption active Icon ={HomeIcon} text ="Home" />
            <SidebarOption Icon={SearchIcon} text ="Explore" />
            <SidebarOption Icon ={NotificationsNoneIcon} text ="Notifications" />
            <SidebarOption Icon ={MailOutlinIcon} text="Messages"/>
            <SidebarOption Icon ={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption Icon ={ListAltIcon} text="Lists"/>
            <SidebarOption Icon ={PermIdentityIcon} text="Profile"/>
            {/* <SidebarOption Icon ={MoreHorizonIcon} text="More"/> */}
            <Button variant ="outlined" className="sidebarTweet" fullWidth>Tweet</Button>

            { /* Button -> Tweet */}
        </div>
    )
}

export default Sidebar;