import React from 'react'

class Veggie extends React.Component{

	render(){
		const {details} = this.props;

		return (
			<li className="menu-veggie">
				<img src={details.image} alt={details.image}/>
				<h3 className="veggie-name"> {details.name} 
					<span className="price"> ${details.price*10/1000 } </span>
				</h3>
				<p> {details.desc} </p>
				<button>Ajouter au panier</button>
			</li>
		)
	}
}

export default Veggie;