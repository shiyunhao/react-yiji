import React from "react";
import { Route, Switch } from "react-router-dom";
import News from "../News/News";
import Recommend from "../Recommend/Recommend";
import Issue from "../Issue/Issue";
import OwnMessage from "../OwnMessage/OwnMessage";
import TypeShow from "../TypeShow/TypeShow";

const MainAnother = () => {
  return (
    <Switch>
      <Route path="/home" exact component={News} />
      <Route path="/home/recommend" component={Recommend} />
      <Route path="/home/issue" component={Issue} />
      <Route path="/home/ownmessage" component={OwnMessage} />
      <Route path="/home/:type" component={TypeShow} />
    </Switch>
  );
};
export default MainAnother;
