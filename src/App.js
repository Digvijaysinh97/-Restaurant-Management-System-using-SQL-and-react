import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customers from "./Pages/Customers";
import Employee from "./Pages/Employee";
import Res from "./Pages/Res";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <div className="app_img">
          <img
            // src="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
            src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1347&q=80"
            // src="https://lh5.googleusercontent.com/proxy/moWhfDJS58O2j22XBjCeQ6MTFarEzIW5A-vBeH7SvwL3Q7JQqEC1o2sDvPS-ue3rLdOMx1sL-aWI8cR8H-mc54p0M9WJ0XplRQGiJ3rEyRZcRfUG7ggTT8YFP9L1Ox7O6Ne-4oVsXfPdQDGJ4vuSYYk3NP6m63eVwJo=s0-d"
            // src="https://cdn.shopify.com/s/files/1/1124/7646/products/Missoni-Home-Canvas-Wallpaper-10165_800x.jpg?v=1561638547"
            // src="https://www.koziel.fr/15804-pdt_1500/brown-plain-canvas-jute-wallpaper.jpg"
            alt=""
          ></img>
        </div> */}
        <Switch>
          <Route path="/customer">
            <Customers />
          </Route>
          <Route path="/res">
            <Res />
          </Route>
          <Route path="/Employee">
            <Employee />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
