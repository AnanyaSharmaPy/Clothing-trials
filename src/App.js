import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './style.css';
import Home from "./routes/Home";
import Dresses from "./routes/Dresses";
import Assemble from "./routes/Assemble";
import SelectSize from "./routes/SelectSize";
import Review from "./routes/Review"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/dresses">
            <Dresses />
          </Route>
          
          <Route path="/assemble">
            <Assemble />
          </Route>
          
          <Route path="/selectSize">
            <SelectSize />
          </Route>
          
          <Route path="/review">
            <Review />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
