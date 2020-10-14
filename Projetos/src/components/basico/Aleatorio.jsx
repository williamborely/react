import React from 'react';

export default (props) => {
    
    const {min, max} = props;

    const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;


    return (
        <div>
            <h3>Valor Aleatório</h3>
            <p>Valor Minimo {min}</p>
            <br/>
            <p>Valor Maximo {max}</p>
            <br/>
            <p>Valor Gerado {aleatorio}</p>
        </div>
    );
};