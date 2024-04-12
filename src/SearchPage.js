import React from "react";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow"; // Fix the import statement here
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'; 
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon /> 
        <h2>FILTER</h2>
      </div>
      <hr/>

      <ChannelRow
        image="https://media.istockphoto.com/id/177347141/photo/close-of-blue-flower.webp?b=1&s=612x612&w=0&k=20&c=cBckMak_sBbTLKfQMbcmdtiO1oAH2KjGmvZlZS-eeJ0="
        channel="Faraii"
        verified={true}
        subs="999k"
        noOfVideos={382}
        description="you get the info in the description"
      />

      <VideoRow
        title="Video Title 1"
        channel="Channel Name 1"
        views="1,234,567"
        subs="100k"
        description="Description for Video 1"
        timestamp="2 days ago"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQvOoiobrm3n9hlcBxWN_XH2-LO9KwNLG_j_Q2vrFHg&s"
      />
      <VideoRow
        title="Video Title 2"
        channel="Channel Name 2"
        views="2,345,678"
        subs="200k"
        description="Description for Video 2"
        timestamp="3 days ago"
        image="https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg"
      />
      <VideoRow
        title="Video Title 3"
        channel="Channel Name 3"
        views="3,456,789"
        subs="300k"
        description="Description for Video 3"
        timestamp="4 days ago"
        image="https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg"
        
        />
      {/* Add additional VideoRow components as needed */}
      
    </div>
  );
}

export default SearchPage;








