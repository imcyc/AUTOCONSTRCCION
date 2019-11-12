import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  state = {  }
  render() { 
    return (
      <footer className="footer">
        <div className="container bottom_border">
        </div>
        <div className="container">
          <p className="text-center">Copyright @2019 | Desarrollado por<br/><a href="#">Habitat para la Humanidad</a> e <a href="#">Instituto Mexicano del Cemento y del Concreto A.C.</a></p>
          <ul className="social_footer_ul">
            <li><a href="http://webenlance.com"><i className="fa fa-facebook-f"></i></a></li>
            <li><a href="http://webenlance.com"><i className="fa fa-twitter"></i></a></li>
            <li><a href="http://webenlance.com"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="http://webenlance.com"><i className="fa fa-instagram"></i></a></li>
          </ul>
        </div>
      </footer>
    );
  }
}
 
export default Footer;