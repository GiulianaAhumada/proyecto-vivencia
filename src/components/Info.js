import React from 'react'
import './Info.css'
import TagFacesIcon from '@material-ui/icons/TagFaces';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import GroupIcon from '@material-ui/icons/Group';

const Info = () => {
    return (
        <div className="info" id="link1">
          
          <div className="caja1">
          <p className="tituloInfo">Somos una concesionaria de autos Peugeot de más de 10 años, aquí encontrarás los mejores autos al mejor precio.
          Comprá tu auto con calidad garantizada. </p>
          <p>
          <CheckCircleOutlineIcon fontSize="large"/> &nbsp; Certificación mecánica de más de 280 puntos.
          </p>
          <br></br>
          <p>
          <CheckBoxIcon fontSice="large"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Garantía de 90 días
          </p>
          <br/>
          <p>
          <TagFacesIcon fontSize="large"/>&nbsp;&nbsp;   Documentación en regla
          </p>  
          <br/>
          <p>
          <GroupIcon fontSize="large"/>&nbsp;&nbsp;&nbsp;Acompañamiento durante todo el proceso
          </p>     
          </div>
          <div className="caja2">
          <div className="titulo">
        <h1> Auto Company</h1>
         <br />
        <h2>Concesionaria de autos peugeot</h2>
        </div>
          </div>
            
        </div>
    )
}

export default Info
