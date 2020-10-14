import './Header.css'
import React from 'react';

export default (props) => {
    return (
        <nav className="navbar">
            <a className="navbar-brand text-white" href="/#">
                <img src="https://woservicos.com.br/assets/img/favicon.ico" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
                <strong>PROJETOS</strong>
            </a>
        </nav>
    )
}