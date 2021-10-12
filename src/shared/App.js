import "./App.css";
import React from "react";
import GlobalStyle from "../elements/GlobalStyle";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Header from "../components/Header";
import Main from "../pages/Main";
import PostWrite from "../pages/PostWrite";

function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Header />
            <ConnectedRouter history={history}>
                <Route path="/" excat component={Main} />
                <Route path="/write" excat component={PostWrite} />
            </ConnectedRouter>
        </React.Fragment>
    );
}

export default App;
