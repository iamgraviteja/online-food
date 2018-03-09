import React, { Component } from 'react';

import './App.css';
import Layout from './containers/Layout/Layout';
import Restaurants from './containers/Restaurants/Restaurants';
import Aux from './hoc/Auxilary';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout />
        <main style={{ marginTop: '70px', overflowY: 'auto' }}>
          <Restaurants />
        </main>
      </Aux>
    );
  }
}

export default App;
