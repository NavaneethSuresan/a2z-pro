import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Signin from './containers/Signin';
import SignUp from './containers/SignUp';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/signin'} component={Signin} />
                <Route exact path={'/signup'} component={SignUp} />
            </Switch>
        </>
    );
};
export default Router;
