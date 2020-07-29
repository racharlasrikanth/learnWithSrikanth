import React from "react";
import "./App.css";
import TopNav from "./components/topNavBar/TopNav";
import Home from "./components/Home";
import Footer from "./components/footer/Footer";
import HomeMovieContent from "./components/HomeMovieContent";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <Route path="/" exact component={Home} />
        <Route path="/" exact component={HomeMovieContent} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
