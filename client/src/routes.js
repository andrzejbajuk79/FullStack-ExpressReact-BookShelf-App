import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Layout from './components/hoc/layout';
import BookView from './components/books/book';


const Routes = () => {
 return (
  <Layout>
   <Switch>
   <Route  path='/' exact component={Home}/>
   <Route  path='/books/:id' exact component={BookView}/>

   </Switch>
  </Layout>
 )
}

export default Routes;

