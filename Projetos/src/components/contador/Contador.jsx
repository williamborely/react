import React from 'react';

class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 2,
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    };

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    };

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        });
    };

    render() {
        return (
            <div>
                <h3>Contador</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input type="number" id="passoInput" value={this.state.passo} onChange={this.setPasso}/>
                </div>
                <p>Valor inicial: {this.state.numero}</p>
                {this.state.numero >= 10 ?
                    <button onClick={this.inc} disabled>Máx</button>
                    :
                    <button onClick={this.inc}>+</button>
                }

                {this.state.numero <= 0 ?
                    <button onClick={this.dec} disabled>Min</button>
                    :
                    <button onClick={this.dec}>-</button>
                }
            </div>
        )
    }

}

export default Contador