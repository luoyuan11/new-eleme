import React, { Component ,Fragment} from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Order from './pages/Order/Order';
import Mine from './pages/Mine/Mine';
<<<<<<< HEAD
<<<<<<< HEAD
import User from './pages/User/User';
import Login from './pages/User/Longin/Login';
import Register from './pages/User/Register/Register';
import './styles/common/reset.scss'
=======
import location from './pages/Location/location';
import './styles/base.scss'
>>>>>>> feature/Home

=======
import ShopDetail from "./pages/ShopDetail/ShopDetail";
import '../src/styles/base.scss';
>>>>>>> feature/discover
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
<<<<<<< HEAD
<<<<<<< HEAD
            <Route path="/pages/User"  component={User} />
            <Route path="/pages/Login"  component={Login} />
            <Route path="/pages/Register"  component={Register} />
=======
            <Route path="/shopDetail"  component={ShopDetail} />
>>>>>>> feature/discover
            <Footer />
          </Fragment>
        </Router>
      </Provider>
=======
            <Route path="/pages/Location/location" component={location}/>
            <Footer />
          </Fragment>
        </Router>
       </Provider>
>>>>>>> feature/Home
    )
  }
}

export default App;
