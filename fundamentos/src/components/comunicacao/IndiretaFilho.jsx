import React from 'react';

export default (props) => {
    const callBack = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={e => { callBack('João', gerarIdade(), gerarNerd()) }}>Fornecer Informações pro Pai</button>
        </div>
    )
}