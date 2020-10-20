import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AirbnbContextProvider from "./contexts/AirbnbContext";

function App() {
  return (
    <div className="app">
      <AirbnbContextProvider>
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
      </AirbnbContextProvider>
    </div>
  );
}

export default App;
