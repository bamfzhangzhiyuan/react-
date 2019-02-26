import React, {Component} from 'react';


 import {
  Form, Icon, Input, Button,message
} from 'antd';

import logo from "./logo.png"
import "./index.less"

class Login extends Component {
  render () {
    return (
      <div className="login">
        <section className="login-top">
          <img src={logo}/>
          <h2>REACT项目: 后台管理系统</h2>
        </section>
        <section className="login-content">
          <h2>用户登陆</h2>
          <WrappedNormalLoginForm/>
        </section>
      </div>

    )


  }
}

class For extends Component{
handleSubmit=(e)=>{
  e.preventDefault()
  const {resetFields,validateFields}=this.props.form
  validateFields((err,value)=>{

    if(!err){
      console.log("ok send ajax")
    }else{
      let arr=[]

      for (let key in err) {

        arr.push(err[key].errors[0])

      }

      if(arr.length===2){
        if(arr[0].field==="password"){
          arr.reverse()
        }
      }


      message.error(arr.map((item)=>{return item.message+" "}))
      
    }
  })


}

Checkpassword=(rule,value,callback)=>{
   if(!value){
     callback("必须输入密码")
   }
   else if(value.length<=4){
    callback("密码必须大于4位")
   }else if(value.length>=10){
     callback("密码必须小于10位")
   }else if(!(/^[a-zA-Z0-9_]+$/.test(value))){
     callback("密码只能包含大小写英文、数字或者下划线")
   }else{
     callback()
   }

}



  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [
              { required: true, message: '请输入用户名' },
              {max:10,message:"用户名必须小于10位"},
              {min:4,message:"用户名必须大于4位"},
              {pattern:/^[a-zA-Z0-9_]+$/,message:"用户名只能包含大小写英文、数字或者下划线"}
            ],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              { validator:this.Checkpassword },

            ],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-btn">登陆</Button>
        </Form.Item>
      </Form>
    )
  }


}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(For);
export default Login;