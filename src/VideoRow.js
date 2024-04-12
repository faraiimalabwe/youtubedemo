import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt={title} />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className="videoRow_headline">{channel}<span className="videoRow_subsNumber">{subs}</span>{""}
        
        </p>
        <p>{views} views • {timestamp}</p>
        <p>{subs} subscribers</p>
        <p className="videoRow_description">{description}</p>
      </div>
    </div>
  ); 
}

export default VideoRow;
