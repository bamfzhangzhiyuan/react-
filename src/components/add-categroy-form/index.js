import React, {Component} from 'react';
import {Form,Select,Input } from "antd"


const Option = Select.Option
const Item = Form.Item;
class Formcategroy extends Component {

  componentWillMount(){

    this.props.Setform(this.props.form)
  }


  render () {
   const {getFieldDecorator} =this.props.form
    return (
      <Form>
        <Item label="选择级别"  >

          {
            getFieldDecorator(
              "parentId",
              {
                initialValue:"0"
              }

          ) (
            <Select onChange={()=>{console.log(111)}}>
              <Option value="0" key="0">"一级菜单"</Option>

              {this.props.data.map((item)=>{
                return(
                  <Option key={item._id} value={item._id}>{item.name}</Option>
                )

              })}
            </Select>)
          }

        </Item>

        <Item label="输入内容">
          {
            getFieldDecorator(
              "categoryName",

              {}

            )
            (<Input placeholder="请输入名称"/>)
          }

        </Item>

      </Form>
    )
  }
}



const WrappedNormalLoginForm = Form.create()(Formcategroy)


export default Form.create()(Formcategroy);
