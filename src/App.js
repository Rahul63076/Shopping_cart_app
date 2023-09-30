javascript
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MyCart from './components/MyCart';
import { Provider } from 'react-redux';
import store from './store';

function App() {
 return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/my-cart" component={MyCart} />
        </Switch>
      </Router>
    </Provider>
 );
}

export default App;