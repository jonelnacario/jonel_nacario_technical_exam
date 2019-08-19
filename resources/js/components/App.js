import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import queryString from "query-string";
import ReactDOM from "react-dom";

import Main from "./Main";
import Header from "./Header";
import Sidebar from "./Sidebar";

class App extends Component {
    render() {
        let MainComponent = () => <Main />;

        return (
            <Fragment>
                <BrowserRouter>
                    <Header />
                    <Sidebar />
                    <Switch>
                        <Route exact path="/main" render={MainComponent} />
                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("app"));
