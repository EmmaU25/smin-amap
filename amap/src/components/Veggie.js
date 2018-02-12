import React from 'react'

class Veggie extends React.Component{


	veggie_en_stock(){
		if(this.props.details.status == "available"){
			return <button onClick={(e) => this.props.add_order( this.props.index,this.props.details )}>"Ajouter au panier"</button>
		}else{
			return <button disabled='true'>"pas plus en stock"</button>
		}
	}

	render(){
		const {details} = this.props;

		return (
			<li className="menu-veggie">
				<img src={details.image} alt={details.image}/>
				<h3 className="veggie-name"> {details.name} 
					<span className="price"> ${details.price*10/1000 } </span>
				</h3>
				<p> {details.desc} </p>
				{this.veggie_en_stock()}
			</li>
		)
	}
}

export default Veggie;