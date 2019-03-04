import React, {Component} from 'react';

import {render} from "react-dom"

import App from "./App"
import {getitem} from "./utils/storageUtils"
import memoryUtils from "./utils/memoryUtils"
const user=getitem()
//将localStorage的值读取出来，保存在内存中
if(user&&user._id){
  memoryUtils.user=user

}



render (<App/>,document.getElementById('root'))