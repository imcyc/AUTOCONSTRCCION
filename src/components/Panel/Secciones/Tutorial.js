import React from 'react';
import { Player } from 'video-react';

const Tutorial = () => {
  return (
    <div>
      <h1><i className="lni-chevron-right"></i> TUTORIAL</h1>
      <hr/>
      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://18.218.198.31/videos/tutorial.mp4"
      />
    </div>
  );
}
 
export default Tutorial;