import React from 'react';

import NavBar from './components/navBar/navBar';
import Kurs from './components/kurs/kurs';
import Home from './components/home/home';
import About from './components/about/about';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import KursDetail from './components/kursDetail/kursdetail';

function App() {
  return (
    <BrowserRouter>

      <div className="container">
        <NavBar />


        <Switch>
          <Route exact path="/">
            <h1> My Project </h1>
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/kurs" component={Kurs} />

          <Route exact path="/kurs/:id">
            <KursDetail />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route path="*">
            <h1> Page not found! </h1>
          </Route>
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
