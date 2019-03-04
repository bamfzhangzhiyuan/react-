import React, {Component} from 'react';
import {Card,Select, Icon, Input,Button,Table,message} from "antd"
import {getpagelist,getupdatepagelist} from "../../api"
const Option = Select.Option;
const columns = [
  { title: '商品名称', dataIndex: 'name', key: 'name' },
  { title: '商品描述', dataIndex: 'desc', key: 'desc' },
  { title: '价格', dataIndex: 'price', key: 'price', },
  {
    title: '状态', dataIndex: '', key: 'caozuo',width:200, render: () => {return <div><Button type="primary"style={{ width: 80 }}> 上架 </Button>&nbsp;&nbsp;&nbsp;在售</div>},
  },
  {
    title: '操作', dataIndex: '', key: 'xiangqing', width:200,render: () => {return <div><a href="javascript:;">详情</a>&nbsp;&nbsp;<a href="javascript:;">修改</a></div>},
  },

];

class Product extends Component {
  state={
    data:[],
    productType:"productName",
    productName:"",
    total:0
  }

  getpagelistfun= async(pageNum,pageSize)=>{

    const {productType,productName}=this.state
    let result=null

    if(productName){
      result=await getupdatepagelist(productType,productName,pageNum,pageSize)

    }else{

      result=await getpagelist(pageNum,pageSize)
    }
    if(result.status===0){
      message.success("success")
      this.setState({
        data:result.data.list,
        total:result.data.total
      })
    }

  }
  

  render () {
    
    return (

      <Card title={
        <div>
          <Select defaultValue="productDesc" style={{ width: 200 }} onChange={(value)=>{this.setState({
            productType:value
          })}}>
            <Option value="productDesc">根据商品描述查询</Option>
            <Option value="productName">根据商品名称查询</Option>

          </Select>&nbsp;&nbsp;&nbsp;
          <Input placeholder="请输入描述"style={{ width: 150 }}  onChange={(e)=>{
            this.setState({
            productName:e.target.value
          })

          }}/>
          <Button type="primary"style={{ width: 100 }} onClick={()=>{if(this.state.productName){
            this.getpagelistfun(1,3)
          }else{
              message.warning("请输入搜索内容")
          }
          }}> 搜索 </Button>
        </div>
      }extra={ <Button type="primary" style={{width:150}} onClick={()=>{}}> <Icon type="plus" />添加产品 </Button>}>


      <Table
        columns={columns}
        dataSource={this.state.data}
        bordered
        rowKey='_id'
        pagination={
          {
            total:this.state.total,
            defaultPageSize:3,
            pageSizeOptions: ['3', '6', `${this.state.total}`],
            showQuickJumper: true,
            showSizeChanger: true,
            onChange:this.getpagelistfun,
            onShowSizeChange:this.getpagelistfun
          }

        }
        loading={this.state.data.length===0}
      />


      </Card>

    )
  }
}

export default Product ;