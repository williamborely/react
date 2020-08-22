import React from 'react';
import DiretaFilho from './DiretaFilho';

export default (props) => {
    return (
        <div>
            <DiretaFilho nome="William" idade={24} nerd={true}/>
            <DiretaFilho nome="Wagner" idade={32} nerd={false}/>
        </div>
    )
}