import React from 'react'
import './Feed.css'
import Tweetbox from './TweetBox'
import Post from './Post'
function Feed() {
    return (
        <div className="feed">


          {/* Header */}
          <div className="feed_header"><h2>Home page</h2> </div>


           {/* Tweetbox */}
         <Tweetbox />

           {/* Post */}

           <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
       
       
        </div>
    );
}

export default Feed
