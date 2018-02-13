import React from 'react';

class VeggieEnOrder extends React.Component{

	render(){
		return(
			<li>
			<strong> {this.props.veggie.name} x {this.props.compteur} = </strong> {this.props.veggie.price * this.props.compteur*10/1000}
			<button onClick={(e) => this.props.delete_order(this.props.index, this.props.veggie)}>X</button> 
			</li>
		)
	}
}

export default VeggieEnOrder;