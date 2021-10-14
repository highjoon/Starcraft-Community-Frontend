import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import GlobalStyle from "../elements/GlobalStyle";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Header from "../components/Header";
import Main from "../pages/Main";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import { actionCreators as userActions } from "../redux/modules/user";
import { getCookie } from ".";
import { Main, PostWrite, Login, SignUp } from "../pages";
import PostDetail from "../pages/PostDetail";
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
                <Route path="/post/:id" exact component={PostDetail}/>
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/post" exact component={PostDetail} />
            </ConnectedRouter>
        </React.Fragment>
    );
}

export default App;
