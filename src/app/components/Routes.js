import React, {Component, Suspense} from 'react';
import {Route, Switch} from "react-router-dom";
import {MyRoutes} from "../const/routes";
import NotFound from "../containers/NotFound";
import Loader from "./Loader";

class Routes extends Component {
    render() {
        return (
            <Suspense fallback={<Loader></Loader>}>
                <Switch>
                    {MyRoutes.map((route) => {
                        return <Route key={route.path} path={route.path} exact component={route.component}/>
                    })}
                    <Route component={NotFound}></Route>
                </Switch>
            </Suspense>
        );
    }
}

export default Routes;