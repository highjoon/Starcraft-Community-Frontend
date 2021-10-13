import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import GlobalStyle from "../elements/GlobalStyle";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { getCookie } from ".";
import { Main, PostWrite, Login, SignUp } from "../pages";
import { Header } from "../components";

function App() {
    const dispatch = useDispatch();
    const cookie = getCookie("user_login") ? true : false;
    useEffect(() => {
        if (cookie) dispatch(userActions.loginCheck(cookie));
    }, []);
    return (
        <React.Fragment>
            <GlobalStyle />
            <ConnectedRouter history={history}>
                <Header />
                <Route path="/" exact component={Main} />
                <Route path="/write" exact component={PostWrite} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={SignUp} />
            </ConnectedRouter>
        </React.Fragment>
    );
}

export default App;
