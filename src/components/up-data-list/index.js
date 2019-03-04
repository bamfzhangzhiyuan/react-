import React, {Component} from 'react';
import {Form,Input } from "antd"



const Item = Form.Item;
class Formcategroy extends Component {

  componentWillMount(){

    this.props.Setform(this.props.form)
  }


  render () {
   const {getFieldDecorator} =this.props.form
    const category=this.props.category
    return (
      <Form>

        <Item label="输入内容">
          {
            getFieldDecorator(
              "categoryName",

              {initialValue:category.name}

            )
            (<Input />)
          }

        </Item>

      </Form>
    )
  }
}



const WrappedNormalLoginForm = Form.create()(Formcategroy)


export default Form.create()(Formcategroy);
