import React, { Component } from 'react';
import './todo.css';

import Tarefas from '../../components/Tarefas'
import Card from '../../components/layout/Card'

class ToDo extends Component {
    render() {
        return (
            <div className="container-fluid shadow">
                <h2 className="center">Projeto To Do List</h2>
                <h6 className="Center">Demonstração sem Mongodb - Versão completa no <a href="https://github.com/williamborely"><i className="fa fa-github"></i>GitHub</a></h6>
                <h6 className="Center">Botões ilustrativos da Table - Todas as funções então no <a href="https://github.com/williamborely"><i className="fa fa-github"></i>GitHub</a> clique e veja!</h6>
                <Card titulo="Projeto 02# To Do List" color="#007bf0">
                    <div className="todoApp">
                        <Tarefas></Tarefas>
                    </div>
                </Card>
            </div>
        )
    }
}

export default ToDo;