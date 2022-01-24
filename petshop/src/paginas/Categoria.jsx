/*
import React, { useEffect, useState } from 'react'
import { Link, Route ,Switch,useParams, useRouteMatch } from 'react-router-dom'
import '../assets/css/blog.css'
import ListaCategorias from '../componentes/ListaCategorias'
import ListaPost from '../componentes/ListaPost'
import subcategoria from '../paginas/Subcategoria'

const Categoria = () => {
    const {id}  = useParams()
    const {url, path}  = useRouteMatch ()
    const {subcategorias, setsubcategorias} = useState ([])
      useEffect (() => {
          busca (`/categorias${id}`,(categoria)=>{
              setsubcategorias(Categoria.subcategorias)
          })
      }, [id])

    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
        </div>
        <ListaCategorias />
        <ul className="lista-categorias container flex">
            {
                subcategoria.map((subcategoria) =>(
                    <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  key={subcategoria}>

                  <Link to={`${url}/${subcategoria}`}>
                  {subcategoria}
                  </Link>
                    </li>
                ))
   
     }
</ul>   <Switch>
        <Route exact path= {`${path}/`}>
        <ListaPost  url={`/posts?categoria=${id}`} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
         <subcategoria />
        </Route>
        </Switch>
        </>
    )
}

export default Categoria  */

import React, { useState, useEffect } from 'react'
import ListaCategorias from '../componentes/ListaCategorias'
import ListaPost from '../components/ListaPost'
import '../assets/css/blog.css'
import { Route, useParams, useRouteMatch, Link, Switch } from 'react-router-dom'
import { busca } from '../api/api'
import SubCategoria from '../paginas/SubCategoria'


const Categoria = () => {
  const { id } = useParams()
  const { url, path } = useRouteMatch()
  const [subcategorias, setSubCategorias] = useState([])

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias)
    })
  }, [id])
  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {
          subcategorias.map((subcategoria) => (
            <li
              className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
              key={subcategoria}
            >
              <Link to={`${url}/${subcategoria}`}>
                {subcategoria}
              </Link>
            </li>
          ))

        }
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPost url={`/posts?categoria=${id}`} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  )
}
export default Categoria