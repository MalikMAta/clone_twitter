import React from 'react'
import './Feed.css'
import Tweetbox from './TweetBox'

function Feed() {
    return (
        <div className="feed">


          {/* Header */}
          <div className="feed_header"><h2>Home page</h2> </div>


           {/* Tweetbox */}
         <Tweetbox />

           {/* Post */}


        </div>
    );
}

export default Feed
