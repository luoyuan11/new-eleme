import React,{Component,Fragment} from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import LoginForm from './Longin/Login'
import Register from './Register/Register'
class User extends Component {
  render(){
    return(
      <Router>
        <Fragment>
            <Route path='/pages/Login'  component={LoginForm}/>
            <Route path='/pages/Register'  component={Register}/>
            <Route path="/pages/User" component={LoginForm}/>
        </Fragment>
      </Router>

    )
  }
}

export  default User
