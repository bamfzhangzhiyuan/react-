import React, {Component} from 'react';
import {
  Form, Icon, Input, Button,Card,Cascader,InputNumber } from 'antd';
const Item = Form.Item;
const InputGroup = Input.Group;
const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 2 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

class Saveupdate extends Component {
  render () {
    return (
     <Card title={
       <div style={{display:"flex",alignItems:"center"}}>
         <Icon type="arrow-left" style={{fontSize:40,marginRight:20,cursor:"pointer" }}/>
         <span style={{fontSize:20}}>编辑商品</span>
       </div>
     }>


       <Form >
         <Item  {...formItemLayout}
                label="商品名称">
           <Input placeholder="商品名称"/>
         </Item>
         <Item  {...formItemLayout}
                label="商品描述">
           <Input placeholder="商品描述"/>
         </Item>
         <Item {...formItemLayout}
               label="所属分类">
           <Cascader options={options} style={{width:300}} placeholder="Please select" />
         </Item>
         <Item {...formItemLayout}
               label="商品价格">
           <InputGroup>
             <InputNumber style={{position: 'relative', zIndex: 10}}/>
             <Input addonAfter={'元'} style={{width: 0, position: 'absolute', left: 65, top: 0.5}}/>
           </InputGroup>
         </Item>
         <Item label='商品图片' {...formItemLayout}>
           xxx
         </Item>
         <Item label='商品详情' {...formItemLayout}>
           xxx
         </Item>
         <Item>
           <Button type='primary' htmlType='submit'>提交</Button>
         </Item>
       </Form>

     </Card>
    )
  }
}

export default Saveupdate;