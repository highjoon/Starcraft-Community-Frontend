import './App.css';
import React from "react";
import GlobalStyle from "../elements/GlobalStyle";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Main from "../pages/Main";
import GlobalStyle from "../elements/GlobalStyle";

function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <ConnectedRouter history={history}>
                <Route path="/" excat component={Main} />
            </ConnectedRouter>
        </React.Fragment>
    );
}

export default App;
