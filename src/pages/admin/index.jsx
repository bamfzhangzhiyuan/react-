import React, {Component} from 'react';

import{Switch,Route,Redirect} from "react-router-dom"
import Home from "../home"
import Category from "../cateagory"
import Pie from "../charts/pie"
import Line from "../charts/line"
import Bar from "../charts/bar"
import Role from "../role"
import User from "../user"
import Product from "../product"
import {Row, Col} from "antd"

import Leftnav from "../../components/left-nav"
import Footer from "../../components/fotter"
import Header from "../../components/header"

import "./index.less"
class Admin extends Component {
  render () {

    return(
      <Row className="admin">
        <Col span={4}className="left-nav">
           <Leftnav/>
        </Col>
        <Col span={20}className="right-content">
          <Header/>
          <div className="between">
          <Switch >
            <Route path="/home" component={Home}/>
            <Route path="/category" component={Category}/>
            <Route path="/pie" component={Pie}/>
            <Route path="/line" component={Line}/>
            <Route path="/bar" component={Bar}/>
            <Route path="/user" component={User}/>
            <Route path="/role" component={Role}/>
            <Route path="/product" component={Product}/>
            <Redirect to="/home"/>
          </Switch>
          </div>
          <Footer/>
        </Col>
      </Row>
    )


  }
}

export default Admin;