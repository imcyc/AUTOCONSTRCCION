import React from 'react';
import { Player, LoadingSpinner, BigPlayButton } from 'video-react';

const Introduccion = () => {
  return (
    <div>
      <h1><i className="lni-chevron-right"></i> INTRODUCCIÓN</h1>
      <hr/>
      <Player
        src="https://18.218.198.31/videos/introduccion.mp4"
        autoPlay={true}
      >
        <BigPlayButton position="center" />
        <LoadingSpinner />
      </Player>
      <h1><i className="lni-chevron-right"></i> Bienvenido a SA31 Serie Autoconstrucción 3 en 1.</h1>
      <hr/>
      <p className="intro">Esta aplicación tiene como nombre Serie Autoconstrucción 3 en 1 ya que encontraras videos de construcción, infografías que te servirán de apoyo como un resumen de cada video y un examen de certificación que te      permitirá: reforzar y entender nuevos procesos.<br/><br/>
        Los videos de construcción se dividen en:<br/><br/>
        <b>Procedimientos constructivos:</b><br/>
        Que van desde cómo hacer el trazo para realizar la excavación de los cimientos hasta como, armar, colar y curar los elementos estructurales que componen una casa habitación de hasta 2 niveles.<br/><br/>
        <b>Cápsulas:</b><br/>
        Un guía que te ayudara a entender ciertos procesos como curado, compactado de concreto, calidad en tabique y tabicón entre otros.<br/><br/>
        <b>Instalaciones y acabados:</b><br/>
        Aquí encontraras los procedimientos básicos para realizar una instalación (sanitaria, hidráulica, eléctrica y pluvial) y también se encuentra como realizar acabados en azotea, paredes, colocación de puertas, entre otros.</p>
      <hr/>
      <h1><i className="lni-chevron-right"></i> El IMCYC tiene como objetivo compartir el conocimiento.</h1>
      <hr/>
    </div>
  );
}
 
export default Introduccion;