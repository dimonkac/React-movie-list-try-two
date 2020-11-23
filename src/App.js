import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { Header } from "./header/index";
// import { Wraper } from "./wraper/index";
import { Content } from "./content/pageContent";
import { Wraper } from "./wraper/styled";
import { FavoritPage } from "./content/favoritPage";
import { More } from "./content/more";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Wraper>
        <Switch>
          <Route path="/all/:page" component={Content} />
          <Route path="/favorites" component={FavoritPage} />
          <Route path="/more/:id" component={More} />
        </Switch>
      </Wraper>
    </div>
  );
};

export default App;
