import React from "react";
import { Route, Switch } from "react-router-dom";
import Lead from "../Lead/Lead";
import Home from "../Home/Home";
import ArticleDetails from "../ArticleDetails/ArticleDetails";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Lead} />
        <Route path="/home" component={Home} />
        <Route path="/articleDetails/:id" component={ArticleDetails} />
      </Switch>
    </div>
  );
};
export default Main;
