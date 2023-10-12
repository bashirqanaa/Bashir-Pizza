import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import YoutubeIcon from "@mui/icons-material/YouTube"
import TelegramIcon from "@mui/icons-material/Telegram"
import {Link} from "react-router-dom"
import "../styles/Footer.css"

function Footer () {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon/>
        <FacebookIcon/>
        <Link to="https://www.youtube.com/"> <YoutubeIcon/> </Link>
       <TelegramIcon/>
      </div>
      <div>
        <p> &copy; 2023 bashirpizza.com</p>
      </div>
    </div>
  );
}

export default Footer;
