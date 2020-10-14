import React from 'react';
import Alunos from '../../data/alunos';

export default (props) => {
    const listaAlunos = Alunos.map(Aluno => {
        return (
            <li key={Aluno.id}>
                {Aluno.id}) {Aluno.nome} - {Aluno.nota}
            </li>
        )
    })
    return (
        <div className="lista">
            <ul style={{ listStyle: 'none' }}>
                {listaAlunos}
            </ul>
        </div>
    )
}