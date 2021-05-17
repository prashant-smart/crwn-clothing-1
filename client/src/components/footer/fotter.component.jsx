import React from 'react';
import './fotter.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faYoutube,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faLandmark,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const footer =()=>{
   
    return(
    <div className='Footer-Container' id='Footer-Container' >
    <footer>
    <div className="container">
            <div className="sec">
            <div><h2>About Us
            <span className="Underline"></span></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non saepe odit velit veritatis perferendis, hic ut praesentium. Enim exercitationem harum nobis inventore earum aliquam delectus.</p>
            </div>
            <ul className="sci">
                <li className='icon'><a  href="https://www.facebook.com/" ><FontAwesomeIcon icon={faFacebookF} className="fa fa-facebook-official" aria-hidden="true"></FontAwesomeIcon></a></li>
                <li className='icon'><a href="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitter} className="fa fa-twitter-square" aria-hidden="true"></FontAwesomeIcon></a></li>
                <li className='icon'><a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} className="fa fa-youtube-square" aria-hidden="true"></FontAwesomeIcon></a></li>
                <li className='icon'><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className="fa fa-instagram" aria-hidden="true"></FontAwesomeIcon></a></li>
            </ul>
        </div>
            <div className="sec">
                <h2 className='quick'>Quick Links
                <span className="Underline"></span></h2>
                <ul>
                    <li className="quick_link">
                        <a href="">FAQ</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Help</a>
                        <a href="">Term & Conditions</a>
                    </li>
                </ul>

            </div>
            <div className="sec">
                <h2 className='contact'>Contact Info
                <span className="Underline"></span></h2>
                <ul className="contact">
                    <li>
                        <span><FontAwesomeIcon icon={faLandmark} className="fa fa-map-marker" aria-hidden="true"></FontAwesomeIcon></span>
                        <span>J2b/278/2,sangamvihar,New Delhi-110062</span>
                    </li>
                    <li>
                        <span><FontAwesomeIcon icon={faPhone} className="fa fa-phone-square" aria-hidden="true"></FontAwesomeIcon></span>
                        <span><a href="tel:9582543380">+919582543380</a></span>
                    </li>
                    <li >
                        <span><FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope" aria-hidden="true"></FontAwesomeIcon></span>
                        <span><a href="mailto:Kartik224blue@gmail.com">Kartik224blue@gmail.com</a></span>
                    </li>
                </ul>
            </div>
        </div>
    
    </footer>
    <div class="copyright"><p>Copyright © 2020 Crwn-Clothing |All Right Reserved</p></div>
    </div>
)}
export default footer;