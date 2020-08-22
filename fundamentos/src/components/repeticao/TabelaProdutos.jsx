import './TabelaProdutos.css'
import React from 'react';
import Produtos from '../../data/produtos';

export default (props) => {
    const tabelaProdutos = Produtos.map((Produto, i) => {
        return (
            <tr key={Produto.id} className={i % 2 === 0 ? 'Par' : ''}>
                <td>{Produto.id}</td>
                <td>{Produto.product}</td>
                <td>R$ {Produto.price}</td>
            </tr>
        )
    })
    return (
        <div>
            <h2>Tabela de Produtos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço(BRL)</th>
                    </tr>
                </thead>
                <tbody>
                    {tabelaProdutos}
                </tbody>
            </table>
        </div>
    )
}