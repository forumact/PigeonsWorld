import React, { Component, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import { MyRoutes } from "../const/routes";
import Loader from "./Loader";
import { useTitle } from "../helper"

function RouteWithTitle({ title, ...props }) {
  useTitle(title);
  return (
    <Route {...props} />
  )
}

class Routes extends Component {
  render() {
    return (
      <Suspense fallback={<Loader></Loader>}>
        <Switch>
          {MyRoutes.map((route) => {
            return <RouteWithTitle title={route.title} key={route.path} path={route.path} exact component={route.component} />
          })}
        </Switch>
      </Suspense>
    );
  }
}

export default Routes;