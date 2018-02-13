import React from 'react';
import VeggieEnOrder from './VeggieEnOrder'
class Order extends React.Component {
  render() {
    return (
     
      <div className="order-wrap">
        <h2>Votre commande</h2>
          <ul className="order">
            {
              Object.keys(this.props.state.order).map(key => <VeggieEnOrder key={key} delete_order={this.props.delete_order}  compteur={this.props.veggieEnOrder(key)} index={key} veggie={this.props.state.order[key]}/>)
            }
            <span >Quantite de legumes: {this.props.state.total}</span>
          <li className="total"><strong>Total: </strong> {this.props.total_price*10/1000}</li>   
          </ul>
          
        </div>
    )
  }
}

export default Order;