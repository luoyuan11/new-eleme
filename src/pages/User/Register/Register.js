// import React,{Component, Fragment} from "react"
import React,{Component,Fragment} from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios'
// import {connect} from '../../../'
import './Register.scss'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
class Register extends Component {
 handleSubmit = (e) => {
   e.preventDefault();
   this.props.form.validateFields((err, values) => {
     if (!err) {
       console.log('Received values of form: ', values);
       const regiserInfo={
         phoneNum:values.phoneNum,
         password:values.password,
         repassword:values.repassword,
       }
       console.log(regiserInfo)
       this.requestRegister(values)
     }
   });
 }
 requestRegister(values){

        var phoneNum=values.phoneNum
        var password=values.password
        var repassword=values.repassword
    console.log(phoneNum,'即将注册')
    if(password ===repassword){
      axios.post('http://localhost:3030/register',{phoneNum,password})
      .then(res=>{
          if(res.status===200){
              if(res.data.code===0){
                this.props.history.push('/pages/User/Login')
              }else if(res.data.code===-2){
                alert('用户名重复')
              }

          }else if(res.status===404){
            // this.props.history.push('/Regiser')
            console.log('注册失败')
          }
      })
    }

 }
 compareToFirstPassword = (rule, value, callback) => {
  const form = this.props.form;
  if (value && value !== form.getFieldValue('password')) {
    callback('Two passwords that you enter is inconsistent!');
  } else {
    callback();
  }
}

 render() {
   const {getFieldDecorator}  = this.props.form;
   return (
     <Fragment>
         <div className='eleme_logo'></div>
         <Form onSubmit={this.handleSubmit} className="login-form">
           <FormItem>
             {getFieldDecorator('phoneNum', {
               rules: [{ required: true, message: '请输入手机号!' },{pattern:/^1[345678]\d{9}$/,message:'输入正确手机号'}],
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
             {getFieldDecorator('repassword', {
               rules: [{ required: true, message: '请再次输入密码!' },{
                validator: this.compareToFirstPassword,
              }],
             })(
               <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="再次输入密码" style={{height:'50px'}}/>
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
               Register in
             </Button>
             Or <Link to="/pages/Login" style={{width:'80%'}}>Login now!</Link>
           </FormItem>
         </Form>


     </Fragment>

   );
 }
}

const RegisterForm = Form.create()(Register);
export default RegisterForm;

