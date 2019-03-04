import React, {Component} from 'react';
import "./index.less"
import logo from "../../assets/images/logo.png"
import { Menu, Icon } from 'antd';
import {NavLink,withRouter} from "react-router-dom"
import menus from "../../config/menuConfig"
const SubMenu = Menu.SubMenu;
class Leftnav extends Component {

  createmenu=(menu)=>{


    return menu.map((item)=>{

        if(item.children){
          const str=this.props.location.pathname

          const res=item.children.find((item)=>{
            return str.indexOf(item.key)===0
          })

          if(res){
            this.openurl=item.key
          }
          return(
            <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
            {this.createmenu(item.children)}
          </SubMenu>
          )

        } else{
          return(
            <Menu.Item key={item.key}>
              <NavLink to={item.key}>
                <Icon type={item.icon}/>
                <span>{item.title}</span>
              </NavLink>
            </Menu.Item>
          )
        }
    })

  }


  componentWillMount(){
    this.result=this.createmenu(menus)

  }






  render () {


    let str=this.props.location.pathname
    if(/^\/product/.test(str)){
       str="/product"
    }

    return (
      <div className="left-nav">
        <header className="header">
          <img src={logo}/>
          <h2>后台管理</h2>
        </header>
        <Menu
          selectedKeys={[str]}
          defaultOpenKeys={[this.openurl]}
          mode="inline"
          theme="dark"

        >

          {this.result}
        </Menu>
      </div>
    )
  }
}

export default withRouter(Leftnav);