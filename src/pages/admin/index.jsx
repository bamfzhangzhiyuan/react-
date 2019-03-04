import React, {Component} from 'react';

import{Switch,Route,Redirect} from "react-router-dom"
import Home from "../home"
import Category from "../cateagory"
import Pie from "../charts/pie"
import Line from "../charts/line"
import Bar from "../charts/bar"
import Role from "../role"
import User from "../user"
import Product from "../product/product"
import {Layout} from "antd"

import Leftnav from "../../components/left-nav"
import Footerr from "../../components/fotter"
import Headerr from "../../components/header"

import "./index.less"
import memoryUtils from "../../utils/memoryUtils"
class Admin extends Component {


  render () {
    //登陆验证（保证第一次渲染和重新渲染都要做登陆验证）
    const user=memoryUtils.user
    const {
        Sider, Content,Footer
    } = Layout
    if(!user||!user._id){
      //说明用户没有登陆过
      return(<Redirect to="/login"/>)
    }
    return(
      <Layout className="admin">
        <Sider >
           <Leftnav/>
        </Sider>
        <Layout span={20}className="right-content">

            <Headerr/>

          <Content className="middle">
          <Switch >
            <Route path="/home" component={Home}/>
            <Route path="/category" component={Category}/>
            <Route path="/charts/pie" component={Pie}/>
            <Route path="/charts/line" component={Line}/>
            <Route path="/charts/bar" component={Bar}/>
            <Route path="/user" component={User}/>
            <Route path="/role" component={Role}/>
            <Route path="/product" component={Product}/>
            <Redirect to="/home"/>
          </Switch>
          </Content>
          <Footer>
            <Footerr/>
          </Footer>
        </Layout>
      </Layout>
    )


  }
}

export default Admin;