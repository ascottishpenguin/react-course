import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./pages/hompeage/homepage.component";
import "./App.css";


function App() {
  return (
    <div>
      <Route path='/' component={HomePage}/>
    </div>
  );
}

export default App;
