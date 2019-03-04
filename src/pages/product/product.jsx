import React, {Component} from 'react';
import {Switch,Route,Redirect} from "react-router-dom"
import Saveupdate from "./saveupdate"
import Detail from "./detail"
import Index from "./index"

class Product extends Component {
  render () {
    return (
      <div>
        <Switch>

          <Route path="/product/index" component={Index}/>
           <Route path="/product/detail" component={Detail}/>
          <Route path="/product/saveupdate" component={Saveupdate}/>
          <Redirect to="/product/index"/>

        </Switch>

      </div>
    )
  }
}

export default Product;