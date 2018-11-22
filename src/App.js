import React, { Component ,Fragment} from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Order from './pages/Order/Order';
import Mine from './pages/Mine/Mine';
import ShopDetail from "./pages/ShopDetail/ShopDetail";
import '../src/styles/base.scss';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Route path="/pages/Home/Home" exact component={Home} />
            <Route path="/pages/Discover/Discover"  component={Discover} />
            <Route path="/pages/Order/Order"  component={Order} />
            <Route path="/pages/Mine/Mine"  component={Mine} />
            <Route path="/shopDetail"  component={ShopDetail} />
            <Footer />
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App;
