import { Avatar } from "@material-ui/core";
import React, {forwardRef} from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOUtlineIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIconfontSize from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
    ({ displayName, username, verified, text, image, avatar }, ref) => {
        return(
    <div className="post" ref={ref}>
      <div className="post_avatar">
        <Avatar src={avatar}></Avatar>
      </div>

      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              {displayName}{" "}
              <span className="post_headerSpecial">
                {verified && (
                  <VerifiedUserIcon className="post_badge"></VerifiedUserIcon>
                )}
                {username}
              </span>
            </h3>
          </div>

          <div className="post_headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image}></img>
        <div className="post_footer">
          <ChatBubbleOUtlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIconfontSize fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}
);

export default Post;
