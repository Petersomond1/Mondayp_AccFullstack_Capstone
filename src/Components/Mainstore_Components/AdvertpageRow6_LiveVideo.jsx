import React from "react";
import YouTube from "react-youtube";
import "./AdvertpageRow.css";


function AdvertpageRow6_LiveVideo() {
  const onPlayerReady = (event) => {
    const player = event.target;
    player.pauseVideo();
  };

  const onPlayerStateChange = (event) => {
    const player = event.target;
    player.playVideo();
  };

  const options = {
    height: "250",
    width: "250",
    playerVars: {
      autoplay: 1,
    },
  };

   

  return (
   
    <div className='container'>
    <div className="box_single">
    <YouTube
      videoId= "HE92WBA7R14"
      opts={options}
      onReady={onPlayerReady}
      onStateChange={onPlayerStateChange}
    />  
    </div>
</div>
   
  );
}

export default AdvertpageRow6_LiveVideo;




