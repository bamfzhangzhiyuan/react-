import React, {Component} from 'react';
import "./index.less"
import {Row,Col,Modal} from "antd"
import {withRouter} from "react-router-dom"
import memoryUtils from "../../utils/memoryUtils"
import menu from "../../config/menuConfig"
import {removeitem} from "../../utils/storageUtils"
import day from "dayjs"
import {getWether} from "../../api/index"


class Header extends Component {

  quit=()=>{
    const confirm = Modal.confirm;
    confirm({
      title: '确认退出并登陆吗?',

      okText:"确认",
      cancelText:"取消",
      onOk:()=> {

        memoryUtils.user={}
        removeitem()
        this.props.history.replace("/login")


      },

    });
  }

 state={
    time:day().format("YYYY-MM-DD HH:mm:ss"),
   weather_data:"rain",
   weather_url:""
 }

  findTitle=(menulist)=>{
    const {pathname}=this.props.history.location

    for (var i = 0; i < menulist.length; i++) {

      if(menulist[i].children){
       const result= this.findTitle(menulist[i].children)
        if(result){
         return result
        }
      }else{
        if(menulist[i].key===pathname){
          return menulist[i].title
        }

      }
    }


  }

  async componentWillMount(){
    setInterval(()=>{
      this.setState({
        time:day().format("YYYY-MM-DD HH:mm:ss")
      })
    },1000)
  await getWether("上饶")
    .then((res)=>{
      this.setState({
        weather_data:res.weather,
        weather_url:res.dayPictureUrl
      })

    })

  }



  render () {
    const res=this.findTitle(menu)

    const user=memoryUtils.user
    return (
      <div className="headerr">
        <Row className="header-top">
          <span>欢迎，{user.username}</span>
          <a href="javascript:void(0);" onClick={this.quit}>退出</a>

        </Row>
        <Row className="header-bottom">
          <Col span={6} className="title">
            {res}

          </Col>
          <Col span={18} className="time">
            <div>
              <span>{this.state.time}</span>
              <span>{this.state.weather_data}</span>
              <img src={this.state.weather_url}/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default withRouter(Header);