import React, { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllStore from './components/Store/AllStore';
import "./pages/pages.css";
import Details from './components/Store/Details';
import PageNotFound from './pages/404';

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Router>
            <Switch>
                <Route path="/" exact>
                    <AllStore />
                </Route>
                <Route path="/details/:id" exact>
                    <Details />
                </Route> 
                <Route path="*" exact>
                    <PageNotFound />
                </Route>
            </Switch>
            </Router>
        </Fragment>
    )
}

export default App
