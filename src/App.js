import React from "react";
import "./App.css";
import TodoApp from "./components/TodoPage/TodoApp";
import NavBar from "./app/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/todos">
          <TodoApp />
        </Route>
        <Route path="/login">
          <TodoApp />
        </Route>
        <Route path="/">
          <TodoApp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
