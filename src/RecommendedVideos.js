import React from 'react';
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos_videos">
        <VideoCard
        title="Video Title 1"
        channel="Channel Name"
        views="1,234,567"
        timestamp="2 days ago"
        image="https://example.com/video1.jpg"
        channelImage="https://example.com/channel1.jpg"
         />
        <VideoCard
        title="Video Title 1"
        channel="Channel Name"
        views="1,234,567"
        timestamp="2 days ago"
        image="https://example.com/video1.jpg"
        channelImage="https://example.com/channel1.jpg"
        
        />
        <VideoCard
        title="Video Title 1"
        channel="Channel Name"
        views="1,234,567"
        timestamp="2 days ago"
        image="https://example.com/video1.jpg"
        channelImage="https://example.com/channel1.jpg"
        />

        <VideoCard 
        title="Video Title 1"
          channel="Channel Name"
          views="1,234,567"
          timestamp="2 days ago"
          image="https://example.com/video1.jpg"
          channelImage="https://example.com/channel1.jpg"
          />
        <VideoCard 
        title="Video Title 1"
        channel="Channel Name"
        views="1,234,567"
        timestamp="2 days ago"
        image="https://example.com/video1.jpg"
        channelImage="https://example.com/channel1.jpg"
        />
        <VideoCard 
        title="Video Title 1"
        channel="Channel Name"
        views="1,234,567"
        timestamp="2 days ago"
        image="https://example.com/video1.jpg"
        channelImage="https://example.com/channel1.jpg"
        
        />
        <VideoCard 
        title="Video Title 1"
        channel="Channel Name"
        views="1,234,567"
        timestamp="2 days ago"
        image="https://example.com/video1.jpg"
        channelImage="https://example.com/channel1.jpg"
        />

</div>
    </div>
  );
}

export default RecommendedVideos;

