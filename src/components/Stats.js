import React,{Component} from 'react';
import {connect} from 'react-redux';

class  Stats extends Component {
  cost() {
  		let totalCost = 0;
  		this.props.shoppingBag.forEach(item => totalCost += item.cost);
  		return totalCost;
  	}
  	calories() {
  		let totalCalories = 0;
  		this.props.shoppingBag.forEach(item => totalCalories += item.calories);
  		return totalCalories;
  	}
  	weight() {
  		let totalWeight = 0;
  		this.props.shoppingBag.forEach(item => totalWeight += item.weight);
  		return totalWeight;
  	}

render(){
  console.log("stats state",this.props);
return(
<div>

  <div className="col-md-3 stats-bg">
    <h2 className="text-center" >Stats Items</h2>
    <ul className="list-group">
    <li className="list-group-item">Cost : $ {this.cost()} </li>
    <li className="list-group-item">Calories : {this.calories()} k.cal</li>
    <li className="list-group-item">Weight : {this.weight()} mg</li>

  </ul>
</div>
</div>
);
}
}
function mapStatetoProps(state){
  console.log('mapStatetoProps',state);
  return{
    shoppingBag:state.shoppingBag
  }
}

export default connect(mapStatetoProps,null)(Stats) ;
