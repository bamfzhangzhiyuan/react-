/*
 用来封装储存的方法
 */
 import store from "store"

 export const setitem=(value)=>{

   if(value&&typeof value!=="function"){
     store.set("user",value)
   }
}
export const getitem=()=>{
   const value=store.get("user")
   return value||""
}
export const removeitem=()=>{
   store.remove("user")

}