import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "../pages/Login/Login";
import AppRouter from './AppRouter';
import Dashboard from '../pages/Dashboard/Dashboard';
import AutorListar from '../pages/Autor/Listar';
import AutorInserir from '../pages/Autor/Inserir';
import UsuarioInserir from '../pages/Usuario/Inserir';
import UsuarioAlterar from '../pages/Usuario/Alterar';

const Routes = () => {
    return (
        <Router>
          <Switch>
               <Route path="/" exact component={Login}/>
               <Route path="/login" exact component={Login}/>
               <Route path="/usuario/inserir" exact component={UsuarioInserir}/>
               <Route path="/usuario/alterar/:id" exact component={UsuarioAlterar}/>
               <AppRouter path="/dashboard" component={Dashboard}/>
               <AppRouter path="/autor/listar" component={AutorListar}/>
               <AppRouter path="/autor/inserir" component={AutorInserir}/>
            </Switch>
        </Router>
    )
}

export default Routes;