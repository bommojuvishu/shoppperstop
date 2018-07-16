import React,{Component} from 'react';
import {connect} from 'react-redux';
import { removeGroceryById } from '../actions';

class  ShoppingBag extends Component {
render(){

return(
  <div>

    <div className="col-md-4 shopping-bag-bg">
      <h2 className="text-center" >Grocery Items</h2>
      <ul className="list-group">
        {this.props.shoppingBag.map((item)=> {
          return  <li key={item.id} onClick={() => this.props.removeGroceryById(item.id)} className="list-group-item"><b>{item.name}</b> - <span className="label label-info">{item.cost}Rs</span> - <span className="label label-warning"> {item.weight}gms</span>-<span className="label label-primary">{item.calories} kcal </span> </li>
        })}

    </ul>
  </div>
  </div>
  );
}
}
function mapStatetoProps(state){

  return{
    shoppingBag:state.shoppingBag
  }
}

export default connect(mapStatetoProps,{ removeGroceryById })(ShoppingBag) ;
