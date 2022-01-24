/* AQUI NOS IMPORTS NÃO ESQUECER DE COLOCAR SWITCH,ROUTE,ROUTER POR AQUI CHAMA AS FUNÇÕES*/

import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../src/paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from '../src/componentes/Cabecalho'
import Post from './paginas/Post'
import Categoria from './paginas/Categoria'

function App() {

  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/sobre'>
          <Sobre />
        </Route>
        <Route path='/categoria/:id'>
          <Categoria />
        </Route>
        <Route path='/posts/:id'>
          <Post />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  )
}



    /** o router funciona como se fosse um link para as paginas html só que em react coloca <router> */
    /** depois coloca <route> <pagina /> depois fecha </route> fecha */
    /* comando  EXACT vai mostrar na tela somente a pagina colocada neste comando*/
    /* QUANDO FOR COLOCADO OUTRO ENDEREÇO DE PAGINA NO NAVEGADOR EXEMPLO  DOGUITO/OI IRA MOSTRAR PAGINA DE ERRO CRIADA Pagina404*/ 
    /* apenas criar outra pagina Pagina404.jsx criar no mesmo estilo com css não esquecer de importar em cima o css e as imagens */
    /*depois na pagina principal colocar o <router> pagina aqui dentro </router>  */
    export default App
