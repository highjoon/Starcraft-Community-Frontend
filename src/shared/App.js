import './App.css';
import React from "react";
<<<<<<< HEAD
import {BrowserRouter, Route} from "react-router-dom";
import PostList from '../pages/PostList';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={PostList}/>
      </BrowserRouter>
    </React.Fragment>
  ) 
=======
import GlobalStyle from "../elements/GlobalStyle";
import Main from "../pages/Main";

function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Main />
        </React.Fragment>
    );
>>>>>>> 18aa8d55eae321ea5546632856210cbc9bfadb10
}

export default App;
