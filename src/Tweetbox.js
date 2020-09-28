import React from 'react'
import {Avatar, Button} from '@material-ui/core'
import './Tweetbox.css'

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                <Avatar src="a.jpg"></Avatar>
                    <input placeholder="What is going on" type="text"></input>
                        

             </div>
             <input className="tweetBox_imageInput" placeholder="Enter Image URL" type="text"></input>

            <Button className="tweetBox_tweetButton"> Tweet </Button>
            
            </form>

            </div>
    );
}

export default TweetBox
