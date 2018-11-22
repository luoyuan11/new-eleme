// import React,{Component, Fragment} from "react"
 import "./Login.scss"
 import "./Login.css"
 import axios from 'axios'
import React,{Component,Fragment} from 'react'
import { NavLink,Link} from 'react-router-dom';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      this.requestLogin(values)
    });
  }
  requestLogin(values){

    var phoneNum=values.phoneNum
    var password=values.password
    var repassword=values.repassword
    console.log(phoneNum,'即将登录')
    if(repassword===password){
      console.log(123)
    }
  axios.post('http://localhost:3030/login',{phoneNum,password})
  .then(res=>{
      if(res.status===200&&res.data.code===0){
        console.log('成功')
        this.props.history.push('/Login')
      }else if(res.status===404){
        // this.props.history.push('/Regiser')
        console.log('失败')
      }
  })


}
  render() {
    const {getFieldDecorator}  = this.props.form;
    return (
      <Fragment>
          <div className='eleme_logo'></div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('phoneNum', {
                rules: [{ required: true, message: '请输入手机号!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号"  style={{height:'50px'}}/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' },{pattern:/^[a-zA-Z0-9_]{6,16}$/,message:'6~16,字母，数字，下划线'}],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" style={{height:'50px'}}/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox style={{width:'50%'}}>Remember me</Checkbox>
              )}
              <Link className="login-form-forgot" to="./Register" style={{width:'50%'}}>Forgot password</Link>
              <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
                Log in
              </Button>
              Or <NavLink to="/pages/Register" style={{width:'80%'}}>register now!</NavLink>
            </FormItem>
          </Form>


      </Fragment>

    );
  }
}

const LoginForm = Form.create()(Login);
export default LoginForm;

