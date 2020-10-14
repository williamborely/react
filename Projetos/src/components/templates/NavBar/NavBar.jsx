import './NavBar.css'
import React from 'react';

export default (props) => {
    return(
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
            <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                <li className="nav-item center">
                    <span>Menu de Navegação</span>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#/">
                    <i className="fa fa-home"></i> Início
                    </a>
                </li>
                <li className="nav-item center">
                    <span>Projetos</span>
                </li>
                 <li className="nav-item">
                    <a className="nav-link text-white" href="#/fundamentos">
                    <i className="fa fa-book"></i> Fundamentos REACTJS
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#/projeto-calculadora">
                    <i className="fa fa-calculator"></i> Calculadora
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#/projeto-todo">
                    <i className="fa fa-list-ol"></i> To Do List
                    </a>
                </li>
                </ul>
            </div>
        </nav>
    )
}