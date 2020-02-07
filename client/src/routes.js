import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import Layout from "./components/hoc/layout";
import BookView from "./components/books/book";
import Login from "./components/containers/admin/login";

const Routes = () => {
 return (
  <Layout>
   <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/books/:id" exact component={BookView} />
   </Switch>
  </Layout>
 );
};

export default Routes;
