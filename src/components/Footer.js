import React from 'react'
import './Footer.css'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Footer = () => {
    return (
      <footer>
        <div className="footer1">
          <WhatsAppIcon fontSize="large" />
          +541139827432 - +541123439723
          <br />
          <br />
          <MailOutlineIcon fontSize="large" />
          AutoCompany@gmail.com
          <br />
          <br />
          <a href="https://www.google.com.ar/maps/place/Z%C3%A1rate+1013,+Sarand%C3%AD,+Provincia+de+Buenos+Aires/@-34.6800049,-58.3316247,17z/data=!3m1!4b1!4m5!3m4!1s0x95a33301ac0ac55b:0x82b145fb1cfba893!8m2!3d-34.6800093!4d-58.329436">
            <p>
              <LocationOnIcon fontSize="large" />
              Calle Zarate 1013 CP 1874 - Avellaneda, Buenos Aires.
            </p>
          </a>
        </div>
        <div className="footer2">
          <p>Atención al cliente</p>
          <br></br>
          <p>Lun a Vie: 11:00 am hasta 19:00 pm</p>
          <p>Sab y Dom: 13:00 pm hasta 18:00 pm</p>
        </div>
      </footer>
    );
}


 export default Footer
