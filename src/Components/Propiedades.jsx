//import React from "react";


//PROPS

//Son valores que recibe  un componente hijo de uno padre, se agrupan en un objeto llamado props
//el cual puede ter tipos de datos como strings, number,boolean, arrays, object, function, react elements, react components
//Las props son valores inmutables de solo lectura, no se pueden modificar
//El componente las recibe como atributos que se pasan atraves de JSX

import PropTypes from 'prop-types';

 function Propiedades({cadena, numero, booleano}){
return(
    /*
    <div>
        <h2>Propiedades</h2>
        <h3>{props.porDefecto}</h3>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano}</li>

        </ul>
    </div>
    */
    <div>
    <h2>Propiedades</h2>
    
    <ul>
        <li>{cadena}</li>
        <li>{numero}</li>
        <li>{booleano}</li>

    </ul>
</div>
);
}

Propiedades.defaultProps = { //para asignar valores poe defecto sin necesidad de pasarlas, tambien se puede igualar en la declaracion
    porDefecto: "Las props",
    cadena: "cadena por defecto"
};

Propiedades.PropTypes={//es un metodo para declarar el tipo de lo q se espera y si es obligatorio usado en JS
    cadena: PropTypes.string,
    booleano: PropTypes.bool.isRequired
}

export default Propiedades

//ESTADO

//Es inmutable, no se puede modificar directamente y es asincrono