/*
 封装发送ajax请求函数
 返回值是promise对象
 需求：
 1. 统一处理成功和失败
 2. 返回值是promise对象，里面直接就是请求回来的数据
 */

import axios from "axios"

import {message} from "antd"

export default function ajax(url,data={},method="GET"){
  let promise=null
  if(method==="GET"){

    promise=axios.get(url,{params:data})
  }else if(method==="POST"){

    promise=axios.post(url,data)
  }

  return new Promise(
    (reslove,reject)=>{
      promise
        .then((res)=>{
            reslove(res.data)
        })
        .catch(()=>{
          console.log("ssss")
          message.error("error")
        })

    }

  )

}
