import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { Main, PostWrite, Login, SignUp, PostDetail, PostEdit } from "../pages";
import GlobalStyle from "../elements/GlobalStyle";
import { Header } from "../components";
import { actionCreators as userActions } from "../redux/modules/user";

function App() {
    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login);

    // useEffect(() => {
    //     dispatch(userActions.logInCheckDB());
    // });

    return (
        <React.Fragment>
            <GlobalStyle />
            <ConnectedRouter history={history}>
                <Header is_login={is_login} />
                <Route path="/" exact component={Main} />
                <Route path="/write" exact component={PostWrite} />
                <Route path="/post/:id" exact component={PostDetail} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/post" exact component={PostDetail} />
                <Route path="/edit/:id" exact component={PostEdit} />
            </ConnectedRouter>
        </React.Fragment>
    );
}

export default App;
