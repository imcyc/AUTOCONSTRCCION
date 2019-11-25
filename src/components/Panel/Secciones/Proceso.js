import React from 'react';
import { Player } from 'video-react';

const Proceso = () => {
  return (
    <div>
      <h1><i className="lni-chevron-right"></i> PROCESO INTEGRAL</h1>
      <hr/>
      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://18.218.198.31/videos/videoglobal.mp4"
      />
    </div>
  );
}
 
export default Proceso;