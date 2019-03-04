import React, {Component} from 'react';
import {Table,Card,Button,Icon,Modal,message} from "antd"
import "./index.less"
import {getList} from "../../api/index"
import WrappedNormalLoginForm from "../../components/add-categroy-form"
import {reqaddList,updateList,getchildrendate} from "../../api/index"
import Updatelist from "../../components/up-data-list"

class Category extends Component {

  state={
   data : [],
   isshowAdd:false,
   isupdateshow:false,
    category:null,
   parentId:"0",
   childname:"",
    childdata:[],
    ischildloading:true
  }

 async componentDidMount(){
   const result= await getList("0")

    if(result.status===0){
      this.setState({
        data:result.data
      })

    }
  }
   getchildlist=async(parentId)=>{
     const result= await getList(parentId)
     if(result.status===0){
       if(parentId==="0"){
         this.setState({
           data:result.data,

         })
       }else{

         if(result.data.length){
           this.setState({
             childdata:result.data,
             ischildloading:true
           })
         }else {
           this.setState({
             childdata:result.data,
             ischildloading:false
           })
         }

       }



     }
   }
   handleOk=async()=>{

   const {parentId,categoryName}=this.form.getFieldsValue()
   const currentId=this.state.parentId
   const result=await reqaddList(parentId,categoryName)
     console.log(parentId,categoryName);
     let updatobj={ isshowAdd:false,}
      if(result.status===0){


         if(parentId==="0"){
           updatobj.data=[...this.state.data,result.data]
         }else {
           if(currentId===parentId){

             updatobj.childdata=[...this.state.childdata,result.data]}
         }


         this.setState(updatobj)



        message.success("success")
      }else{
        message.error("err")
      }
    this.form.resetFields()

  }

   update=async()=>{
     const categoryId=this.state.category._id
     const categoryName=this.form.getFieldValue("categoryName")
     /*console.log(categoryName)*/
     if(categoryName!==this.state.category.name){

       const result=await updateList(categoryId,categoryName)


       if(result.status===0){
         message.success("success")

         this.setState({
           isupdateshow:false,
           data:this.state.data.map((item)=>{
             if(item._id===categoryId){
               item.name=categoryName
             }
             return item
           })
         })

       }else{
         message.error("error")

       }
     }else {
       message.error("请对比后重新输入")
     }

   }

   getchilddate=async (category)=>{

     const categoryId=category._id
     console.log(categoryId);
     const result= await getchildrendate(categoryId)

     if(result.status===0){

        console.log(result.data,"dddddddd")
      /*this.update(result.data._id)*/
     }

   }

   componentWillMount(){

   }

  render () {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',

    }, {
      title: '操作',
      width:300,
      render: (category)=> {
        return(
        <div>
          <a href="javascript:void(0)" onClick={()=>{


             (async()=>{
               await this.setState({
                 isupdateshow:true,
                 category:category
               })

             })()

          }}>修改名称</a> &nbsp;&nbsp;&nbsp;

          <a href="javascript:void(0)" onClick={()=>{

            this.getchildlist(category._id)

            this.setState({
              parentId:category._id,
              childname:category.name
            })
          }}>
            查看其子品类
          </a>
        </div>
      )}
    }];
    const {data,isshowAdd,isupdateshow,parentId,childname,childdata,ischildloading}=this.state
    const ischild=parentId==="0"
    const date=ischild?data:childdata
    const isloading=ischild?data.length===0:   ischildloading&&childdata.length===0

    const titlee=(parentId==="0"?"分类列表":

      <div>
        <Button type="primary" onClick={()=>{

          this.setState({
            parentId:"0"
          })
        }}>分类列表</Button>
        <Icon type="arrow-right" /> &nbsp;&nbsp;{childname}
      </div>)
    return (

       <Card
         title={titlee}
         extra={<Button type='primary' onClick={()=>{this.setState({isshowAdd:true})}}><Icon type="plus" />添加品类</Button>}
       >
       <Table
         columns={columns}
         dataSource={date}
         bordered
         pagination={{
             defaultPageSize:3,
             pageSizeOptions:["3","4","9"],
             showSizeChanger:true,
             showQuickJumper:true,

           }}
         loading={isloading}
         rowKey='_id'

       />
         <Modal
           title="添加分类"
           visible={isshowAdd}
           onOk={this.handleOk}
           onCancel={()=>{this.setState({isshowAdd:false})}}
           okText="确认"
           cancelText="取消"
         >

           <WrappedNormalLoginForm data={data} Setform={(form)=>{this.form=form}}/>

         </Modal>
         <Modal
           title="更新分类"
           visible={isupdateshow}
           onOk={this.update}
           onCancel={()=>{this.setState({isupdateshow:false})}}
           okText="确认"
           cancelText="取消"
         >

           <Updatelist category={this.state.category} Setform={(form)=>{this.form=form}}/>

         </Modal>

       </Card>


    )
  }
}

export default Category;