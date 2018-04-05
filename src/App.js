import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
import Layout from './containers/Layout/Layout';
import Restaurants from './containers/Restaurants/Restaurants';
import Aux from './hoc/Auxilary';
import Orders from './components/Orders/Orders';
import Dishes from './containers/Dishes/Dishes';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout />
        <main style={{ marginTop: '50px', overflowY: 'auto' }}>
          <Switch>
            <Route path="/orders" component={Orders} />
            <Route path="/dishes/:id"  component={Dishes} />
            <Route path="/" exact component={Restaurants} />
            <Redirect to="/" />
          </Switch>
        </main>
      </Aux>
    );
  }
}

export default App;
