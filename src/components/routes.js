import React from "react";
import { Route, IndexRoute } from "react-router";

/**
 * Import all page components here
 */
import App from "./components/App";
import MainPage from "./components/MainPage";
import SomePage from "./components/SomePage";
import SomeOtherPage from "./components/SomeOtherPage";
import Home from "./pages/Home";
import Unlimited from "./pages/Unlimited";

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="/" component={Home} />
    <Route path="/unlimited" component={Unlimited} />
  </Route>
);
