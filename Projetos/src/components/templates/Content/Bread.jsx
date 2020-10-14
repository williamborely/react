import './Bread.css'
import React from 'react'

export default (props) => {
    return(
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#/">Início</a></li>
                <li className="breadcrumb-item active" aria-current="page">Início</li>
            </ol>
        </nav>
    )
}