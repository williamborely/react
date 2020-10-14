import React from 'react';
import './Fundamentos.css';

import Primeiro from '../../components/basico/Primeiro';
import ComParametro from '../../components/basico/ComParametro'
import Fragmento from '../../components/basico/Fragmento';
import Aleatorio from '../../components/basico/Aleatorio';
import Card from '../../components/layout/Card';
import Familia from '../../components/basico/Familia';
import FamiliaMembro from '../../components/basico/FamiliaMembro';
import ListaAlunos from '../../components/repeticao/ListaAlunos'
import TabelaProdutos from '../../components/repeticao/TabelaProdutos';
import ParOuImpar from '../../components/condicional/ParOuImpar';
import UsuarioInfo from '../../components/condicional/UsuarioInfo';
import DiretaPai from '../../components/comunicacao/DiretaPai';
import IndiretaPai from '../../components/comunicacao/IndiretaPai';
import Input from '../../components/formulario/Input';
import Contador from '../../components/contador/Contador';
import Mega from '../../components/mega/Mega';
export default () => (
    <div id="Fundamentos" className="container-fluid shadow">
        <h2 className="center">Fundamentos do React</h2>
        <Card titulo="Fundamentos de ReactJS" color="#007bf0">
            <div className="Cards">

                <Card titulo="13# MegaSena" color="#2ECC71">
                    <Mega qtde={6}/>
                </Card>

                <Card titulo="12# Contador" color="#D2B4DE">
                    <Contador numeroInicial={1} />
                </Card>

                <Card titulo="11# Componente Controlado" color="#D35400">
                    <Input />
                </Card>

                <Card titulo="10# Comunicação Indireta" color="#DD10FC">
                    <IndiretaPai />
                </Card>

                <Card titulo="09# Comunicação Direta" color="#FA200A">
                    <DiretaPai />
                </Card>

                <Card titulo="08# Componente Condicional" color="#7510DA">
                    <ParOuImpar numero={22} />
                    <UsuarioInfo usuario={{ nome: 'William' }} />
                    <UsuarioInfo usuario={{}} />
                </Card>

                <Card titulo="07# Desafio Repetição" color="#186A3B">
                    <TabelaProdutos />
                </Card>

                <Card titulo="06# Repetição" color="#34495E">
                    <ListaAlunos />
                </Card>

                <Card titulo="05# Componentes com Filhos" color="#FF1493">
                    <Familia sobrenome="Borely">
                        <FamiliaMembro nome="William" />
                        <FamiliaMembro nome="Paola" />
                        <FamiliaMembro nome="Wagner" />
                    </Familia>
                </Card>

                <Card titulo="04# Desafio Aleatório" color="#5499C7">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="03# Fragmento" color="#2ECC71">
                    <Fragmento />
                </Card>

                <Card titulo="02# Com Parametro" color="#8E44AD">
                    <ComParametro
                        titulo="Título"
                        subtitulo="Subtítulo" />
                </Card>

                <Card titulo="01# Primeiro Componente" color="#F1C40F">
                    <Primeiro />
                </Card>
            </div>
        </Card>
    </div>
);