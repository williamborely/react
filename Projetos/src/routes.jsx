import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import FundamentosReact from './projetos/fundamentos/Fundamentos';
import Content from './components/templates/Content/Content';
import Calculadora from './projetos/calculadora/Calculator';
import ToDo from './projetos/todo/todo';

export default (props) => (
    <Router history={hashHistory}>
        <Route path="/" component={Content} />
        <Route path="/fundamentos" component={FundamentosReact} />
        <Route path="/projeto-calculadora" component={Calculadora} />
        <Route path="/projeto-todo" component={ToDo} />
        <Redirect from="*" to="/" />
    </Router>
)