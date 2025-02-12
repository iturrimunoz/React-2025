import React from 'react';
import '../styles/landing.css';

const LandingPage = () => {

  return (
    <div className="landing-container">
      <h1 className="landing-title">Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
      <p>Bienvenido</p>
      <hr></hr>
      <p>Este modulo se centra en el uso de React, 
        incluyendo la creacion de componentes, el manejo de hooks, y el uso de Redux.</p>
        <br></br>
      <p> Temas Cubiertos</p>
      <hr></hr>
      <table border="0" > 
        <tbody>
        <tr> 
      <td > <p> Componentes Funcionales y de Clase</p></td> 
      <td > <p> Uso de React Hooks como useState, useEffect</p></td>
      <td > <p> Creacion de Customhooks como useForm</p></td>
      <td > <p> Gestion de Variables de estado con useState</p></td>
      <td > <p> Gestion de Estado global con Redux</p></td>
      <td > <p> Integracion de Redux con React</p></td>
      <td > <p> Manejo de Formularios en React</p></td>
      <td > <p> Publicando nuestra Pagina con GitHub Pages</p></td>
   </tr>
  </tbody>
</table>

      <p>Recursos Adicionales</p>
      <hr></hr>
      <p> Para profundizar los temas, puedes revisar los siguientes recursos:</p>
      <br>
      </br>
      <p>2024 Modulo 7 USIP</p>
    </div>
  );
};

export default LandingPage;