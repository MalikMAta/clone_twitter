import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import "./Tweetbox.css";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sentTweet = (e) => {
    // stop the refresh
    e.preventDefault();

    // Add an object to the database
    db.collection("posts").add({
      displayName: "Malik Ata",
      username: "MalikCelver",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://media.giphy.com/media/fyJxMb1JM4fAc/giphy.gif",
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="a.jpg"></Avatar>

          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What is going on"
            type="text"
          ></input>
        </div>

        <input
          
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox_imageInput"
          placeholder="Enter Image URL"
          type="text"
        ></input>

        <Button
          type="submit"
          onClick={sentTweet}
          className="tweetBox_tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
