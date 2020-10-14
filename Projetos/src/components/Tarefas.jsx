import React, { Component } from 'react';

export default class Tarefas extends Component {
    constructor(){
        super()
        this.state = { 
            tarefa: "",
            Tarefas: [
                { id: 1, product: 'Comprar Lapis'},
                { id: 2, product: 'Comprar Caneta'},
                { id: 3, product: 'Comprar Borracha'},
                { id: 4, product: 'Comprar Apagador'},
                { id: 5, product: 'Comprar Giz'},
                { id: 6, product: 'Comprar Marcador'},
                { id: 7, product: 'Comprar Apontador'},
                { id: 8, product: 'Comprar Clips'},
                { id: 9, product: 'Comprar Papel A4'},
                { id: 10, product: 'Comprar Liquid-Paper'},
            ]};

        this.handleChange = this.handleChange.bind(this);
        this.addTarefa = this.addTarefa.bind(this);
    }
    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <div>
                    <input className="input" type="text" onChange={this.handleChange} value={this.state.tarefa}/>
                    <button className="btn btn-primary" onClick={this.addTarefa}><i className="fa fa-plus"></i></button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tarefa</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.Tarefas.map(tarefa => 
                        <tr key={tarefa.id}>
                            <td>#{tarefa.id}</td>
                            <td>{tarefa.product}</td>
                            <td>
                                <a href="#"><i className="fa fa-check green"></i></a>
                                <a href="#"><i className="fa fa-pencil yellow"></i></a>
                                <a href="#"><i className="fa fa-trash red"></i></a>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }

    addTarefa() {
        this.setState({ 
            tarefa: '',
            Tarefas: [].concat(this.state.Tarefas, this.state.tarefa)});
    }

    handleChange(e) {
        this.setState({ tarefa: e.target.value });
    }
}