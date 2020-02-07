import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import Layout from "./components/hoc/layout";
import BookView from "./components/books/book";
import Login from "./components/containers/admin/login";
import Auth from "./components/hoc/auth";
import Admin from "./components/Admin/admin";
import AddBook from "./components/containers/admin/add.jsx";

const Routes = () => {
 return (
  <Layout>
   <Switch>
    {/* zawsze pokazujemy/NEVER */}
    <Route path="/" exact component={Auth(Home, null)} />{" "}
    {/* nie pokazujemy gdy zalogowany/HALF */}
    <Route path="/login" exact component={Auth(Login, false)} />
    {/* zpokazujemy tylko gdy zalogowany/FULL */}
    <Route path="/user" exact component={Auth(Admin, true)} />
    {/* zawsze pokazujemy/NEVER */}
    <Route path="/books/:id" exact component={Auth(BookView)} />
    {/* zpokazujemy tylko gdy zalogowany/FULL */}
    <Route path="/user/add" exact component={Auth(AddBook, true)} />
   </Switch>
  </Layout>
 );
};

export default Routes;
