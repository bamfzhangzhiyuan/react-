/*
 定义发送请求函数模块
 */
import ajax from "./ajax"
import jsonp from "jsonp"
const prefix=process.env.NODE_ENV === 'development' ? '' : 'http://localhost:5000';

/*const prefix="http://localhost:3000"*/
export  const loginAjax=(username,password)=>{

  return ajax(prefix+"/login",{username,password},"POST")
}

export const ADDajax=(data)=>{
  ajax(prefix,{data},"POST")
}
export const getWether=(city)=>{

  return new Promise((res,rej)=>{

    jsonp(`http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`,{},(err,data)=>{
      if(!err){

        res(data.results[0].weather_data[0])
      }else{
        console.log("ssss")
      }


    })


  })

}

export const getList=(parentId)=>{
  return ajax(prefix+"/manage/category/list",{parentId})

}
export const reqaddList=(parentId,categoryName)=>{

  return ajax(prefix+"/manage/category/add",{parentId,categoryName},"POST")

}
export const updateList=(categoryId,categoryName)=>{

  return ajax(prefix+"/manage/category/update",{categoryId,categoryName},"POST")
}
export const getchildrendate=(categoryId)=>{

  return ajax(prefix+"/manage/category/info",{categoryId})
}
export const getpagelist=(pageNum,pageSize)=>{

  return ajax(prefix+"/manage/product/list",({pageNum,pageSize}))
}
export const getupdatepagelist=(productType,productName,pageNum,pageSize)=>{

  return ajax(prefix+"/manage/product/search",({[productType]:productName,pageNum,pageSize}))
}


export const obc = {aa:"sss"}

export const obc = {bb:"sss"}
export const arc = {bb:"sclearss"}



