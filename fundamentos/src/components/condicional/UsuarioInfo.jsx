import React from 'react';
import If, {Else} from './If';

export default (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo(a) <strong>{props.usuario.nome}</strong>!
                <Else>
                    Seja bem vindo(a) <strong>Anônimo</strong>!
                </Else>
            </If>
        </div>
    )
}