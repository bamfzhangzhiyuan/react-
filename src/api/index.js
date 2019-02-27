/*
 定义发送请求函数模块
 */
import ajax from "./ajax"

const prefix=process.env.NODE_ENV === 'development' ? '' : 'http://localhost:5000';

/*const prefix="http://localhost:3000"*/
export  const loginAjax=(username,password)=>{

  return ajax(prefix+"/login",{username,password},"POST")
}

export const ADDajax=(data)=>{
  ajax(prefix,{data},"POST")
}
