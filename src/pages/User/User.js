import React,{Component,Fragment} from 'react';
import { HashRouter as Router, Route,Redirect} from 'react-router-dom';
import LoginForm from './Longin/Login'
import Register from './Register/Register'
class User extends Component {
  render(){
    return(
      <Router>
        <Fragment>
            <Route path='/pages/Login'  component={LoginForm}/>
            <Route path='/pages/Register'  component={Register}/>
            <Redirect from='/pages/User' to='/pages/Login'></Redirect>
        </Fragment>
      </Router>

    )
  }
}

export  default User
