import React, { Component ,Fragment, } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Order from './pages/Order/Order';
import Mine from './pages/Mine/Mine';

import User from './pages/User/User';
import Login from './pages/User/Longin/Login';
import Register from './pages/User/Register/Register';
import './styles/common/reset.scss'

import location from './pages/Location/location';
import './styles/base.scss'

import ShopDetail from "./pages/ShopDetail/ShopDetail";
import Detail from './pages/Home/Detail/Detail';

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

            <Route path="/pages/User"  component={User} />
            <Route path="/pages/Login"  component={Login} />
            <Route path="/pages/Register"  component={Register} />

            <Route path="/shopDetail"  component={ShopDetail} />
            <Route path="/pages/Home/Detail" component={Detail} />

            <Route path="/pages/Location/location" component={location}/>
            <Route path="" exact component={Home} />
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App;
