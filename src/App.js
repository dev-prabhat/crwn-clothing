import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import './App.css';

const Hatspage = () => (
  <div>
    <h1>Hatspage</h1>
  </div>
)

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={Hatspage} />
    </Switch>
  );
}

export default App;
