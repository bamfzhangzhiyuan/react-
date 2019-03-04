import React, {Component} from 'react';




import logo from "../../assets/images/logo.png"
import "./index.less"
import WrappedNormalLoginForm from "../../components/login-form"
import {loginAjax} from "../../api/index.js"
import {setitem} from "../../utils/storageUtils"
import memoryUtils from "../../utils/memoryUtils"
export default class Login extends Component {

 state={
   errmsg:""

 }
  sendajax=async(username,password)=>{

    const result=await loginAjax(username,password)

      if(result.status===0){
        //用户登陆成功
        //保存用户信息
        setitem(result.data)
        //在内存中保存一份
        memoryUtils.user=result.data
        //跳转到admin页面
        this.props.history.replace("/")

      }else{

        this.setState({
          errmsg:result.msg,

        })

      }

  }


  render () {
   const {errmsg}=this.state
    const height=errmsg?30:0


    console.log(this.state.height)
    return (
      <div className="login">
        <section className="login-top">
          <img src={logo}/>
          <h2>秦皇岛旅游后台管理系统</h2>
        </section>
        <section className="login-content">
          <div className="err-msg" style={{height}}>{errmsg}</div>
          <h2>用户登陆</h2>
          <WrappedNormalLoginForm res={this.sendajax}/>
        </section>
      </div>

    )


  }
  componentDidUpdate(){

   this.bule=setTimeout(()=>{
      this.setState({
        errmsg:"",

      })
      clearTimeout(this.bule)
    },1000)

  }
}


