
 import "./Login.scss"
 import "./Login.css"
 import axios from 'axios'
import React,{Component,Fragment} from 'react'
import { NavLink,Link} from 'react-router-dom';
import Cookie from 'react-cookies'

import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class Login extends Component {
  // constructor(props){
  //   super(props);
  //   const{cookies}=props;
  //   this.state={
  //     phoneNume:
  //   }
  // }
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
    console.log(phoneNum,'即将登录')
  axios.post('http://localhost:4000/login',{phoneNum,password})
  .then(res=>{
      if(res.status===200&&res.data.code===0){
        console.log('成功')
        alert('登录成功')
        Cookie.save('userId', phoneNum)
        this.props.history.push('/pages/Mine/Mine')
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
          <div className='eleme_logo'>
              <i className='iconfont icon-changyonglogo41 ' ></i>
          </div>
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
                <Checkbox style={{width:'50%'}}>记住我</Checkbox>
              )}
              <Link className="login-form-forgot" to="./Register" style={{width:'50%'}}>忘记密码</Link>
              <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
                登录
              </Button>
              或 <NavLink to="/pages/Register" style={{width:'80%'}}>去注册!</NavLink>
            </FormItem>
          </Form>


      </Fragment>

    );
  }
}

const LoginForm = Form.create()(Login);
export default LoginForm;

