import React,{Component} from 'react';
import {connect} from 'react-redux';
import { addGroceryById } from '../actions';

class  Grocery extends Component {
render(){

return(
<div>

  <div className="col-md-4 grocery-bg">
    <h2 className="text-center" >Grocery Items</h2>
    <ul className="list-group">
      {this.props.grocery.map((item)=> {
        return  <li key={item.id} onClick={() => this.props.addGroceryById(item.id)} className="list-group-item"><b>{item.name}</b> - <span className="label label-info">{item.cost}Rs</span> - <span className="label label-warning"> {item.weight}gms</span>-<span className="label label-primary">{item.calories} kcal </span> </li>
      })}

  </ul>
</div>
</div>
);
}
}

function mapStatetoProps(state){

  return{
    grocery:state.grocery
  }
}

export default connect(mapStatetoProps,{ addGroceryById })(Grocery) ;
