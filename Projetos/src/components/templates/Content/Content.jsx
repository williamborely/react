import './Content.css'
import React from 'react'

import Card from './Card'

export default (props) => {
    return(
        <div className="container-fluid shadow">
            <Card titulo="Olá, Seja Bem Vindo(a)!" color="#007bf0">
                <p>Olá! Me chamo William Borely, sou um Desenvolvedor Web FullStack Junior e aqui coloco em prática todo o conhecimento adquirido.</p>
                <p><strong>Fique a vontade para olhar por ai.</strong></p>
                <p>Ah! Neste momento você já iniciou uma jornada em meus projetos, pois este Dashboard é um deles.</p>
            </Card>
        </div>
    )
}