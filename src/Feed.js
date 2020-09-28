import React,{useEffect, useState} from "react";
import "./Feed.css";
import Tweetbox from "./TweetBox";
import Post from "./Post";
import db from './firebase'

function Feed() {
  const [posts, setPost] = useState([]);


  useEffect(() =>{

      db.collection('post').onSnapshot(snapshot => (

        setPost(snapshot.docs.map(doc => doc.data()))
      ))

  }, [name,age])


  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h2>Home page</h2>{" "}
      </div>

      {/* Tweetbox */}
      <Tweetbox />

      {/* Post */}

      <Post
        displayName="Malik"
        username="jdjd"
        verified={true}
        text="sjjs"
        avatar="https://media.giphy.com/media/5UBoxtyNy0NRNhX1HS/giphy.gif"
        image="https://media.giphy.com/media/5UBoxtyNy0NRNhX1HS/giphy.gif"
      />
    </div>
  );
}

export default Feed;
