import React, { Component } from 'react';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  LoadingSpinner, 
  BigPlayButton
} from 'video-react';

class Proceso extends Component {
  
  render(){
    return (
      <div>
        <h1><i className="lni-chevron-right"></i> PROCESO INTEGRAL</h1>
        <hr/>
        <Player 
          poster="/assets/poster.png"
          src="https://18.218.198.31/videos/videoglobal.mp4"
          autoPlay={true}>
          <BigPlayButton position="center" />
          <LoadingSpinner />
          <ControlBar>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
            <VolumeMenuButton disabled />
          </ControlBar>
        </Player>
      </div>
    );
  }
}
 
export default Proceso;