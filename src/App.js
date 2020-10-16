import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  console.log("process.env", process.env);
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/search/:city">
            <SearchPage />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route path="/listing/:id">
            <Listing />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;