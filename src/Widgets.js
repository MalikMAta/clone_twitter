import React from 'react';
import SearchIcon from "@material-ui/icons/Search"
import './Widget.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton, 
  TwitterTweetEmbed
} from "react-twitter-embed"

function Widgets(){
  return(
    <div className="widgets">
<div className="widget_input">
  <SearchIcon classname="widgets_seachIcon"></SearchIcon>

<input placeholder="Search Twiter" type="text"/>
    </div>  

    <dix className="widget_wigetContainer">

      <h2>Whats Happeneing</h2>
        <TwitterTweetEmbed tweetId ={"463440424141459456"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />
           <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />

    </dix>
   </div>
  );
}

export default Widgets;
