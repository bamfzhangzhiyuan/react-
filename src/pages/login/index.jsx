import React, {Component} from 'react';




import logo from "../../assets/images/logo.png"
import "./index.less"
import WrappedNormalLoginForm from "../../components/login-form"
import {loginAjax} from "../../api/index.js"

export default class Login extends Component {
 state={
   errmsg:""
 }
  sendajax=async(username,password)=>{

    const result=await loginAjax(username,password)

      if(result.status===0){
        this.props.history.replace("/")
        console.log(this.props.history)
      }else{
        this.setState({
          errmsg:result.msg
        })
      }

  }


  render () {
   const {errmsg}=this.state
    const height=errmsg?30:0
    console.log("hhhhh")
    return (
      <div className="login">
        <section className="login-top">
          <img src={logo}/>
          <h2>REACT项目: 后台管理系统</h2>
        </section>
        <section className="login-content">
          <div className="err-msg" style={{height}}>{errmsg}</div>
          <h2>用户登陆</h2>
          <WrappedNormalLoginForm res={this.sendajax}/>
        </section>
      </div>

    )


  }
}


