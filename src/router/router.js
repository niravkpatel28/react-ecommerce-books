import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import BookList from "../container/bookList";
import BookDetails from "../container/bookDetails";
const Router = (props) => {
  console.log("router props ", props);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/:categoryId" component={BookList} />
        {/* <Route
          exact
          path="/category/:categoryId/:isbn"
          component={BookDetails}
        /> */}
        <Route
          exact
          path="/category/:categoryId/:isbn"
          render={(props) => {
            console.log("router in action with ", props);
            return <BookDetails {...props.history.location.state} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
