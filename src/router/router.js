import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import BookList from "../container/bookList";
const Router = (props) => {
  console.log("router props ", props);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/:categoryId" component={BookList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
