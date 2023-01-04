import React, {useState} from "react";
import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);
  const [likes, likeChange] = useState(video.upvotes);
  const [dislikes, dislikeChange] = useState(video.downvotes);
  const [commentSee , changeCommentSee] = useState("")

  function handleLikeChange(){
    return likeChange(likes+1)
  }
  function handleDislikeChange(){
    return dislikeChange(dislikes+1)
  }

  function makeComment(userComment){
    return (
      <>
      <header> {userComment.user} </header>
      <p> {userComment.comment} </p>
      </>
    )
  }
  const comments = video.comments.map(com => makeComment(com))

  function handleCommentSee(){
    commentSee === "" ? changeCommentSee("hidden") : changeCommentSee("")
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <body>
        <header>{video.title}</header>
        <p> {video.views} Views | Uploaded {video.createdAt} </p>
        <button onClick={handleLikeChange} > {likes} 👍 </button>
        <button onClick={handleDislikeChange} > {dislikes} 👎 </button>
        
        <button onClick={handleCommentSee}> Hide Comments </button>
        <header> {video.comments.length} Comments </header>
        <p className={commentSee}>{comments}</p>
      </body>
    </div>
  );
}

export default App;
