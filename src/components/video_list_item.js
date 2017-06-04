import React from "react";

const VideoListItem = ({video, onVideoSelect}) => {
  console.log(video);
  const imageURL = video.snippet.thumbnails.default.url;
  return(
      <li className="list-group-item" onClick={() => onVideoSelect(video)}>
        <div className="media">
          <div className="video-item media-left">
            <img className="media-object" src={imageURL} />
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
  );
};

export default VideoListItem;
