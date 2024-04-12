import React from "react";
import Header from './Header';
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage"
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Switch>
            <Route path="/search/:searchTerm">
              <h1></h1>
              <SearchPage/>
            </Route>
            <Route path="/">
              <RecommendedVideos />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}




