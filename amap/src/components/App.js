import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleVeggies from '../sample-veggies';
import Veggie from './Veggie'

class App extends React.Component {

  constructor() {
    super();

    this.addVeggie = this.addVeggie.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.add_order = this.add_order.bind(this);
    this.incrementVeggie = this.incrementVeggie.bind(this);
    this.delete_order = this.delete_order.bind(this);
    this.veggieEnOrder = this.veggieEnOrder.bind(this);
    this.state = {
      veggies: {},
      order: {},
      total_price: 0,
      compteur: {},
      total: 0
    };
  }


  addVeggie(veggie) {
    // mise à jour du state
    // on fait une copie de notre state
    const veggies = {...this.state.veggies};
    // ajout de notre nouveau veggie
    const timestamp = Date.now();
    veggies[`veggie-${timestamp}`] = veggie;
    // mise à jour du state
    this.setState({ veggies });
  }

  loadSamples() {
    this.setState({
      veggies: sampleVeggies
    });
  }


  veggieEnOrder( key){
    return this.state.compteur[`${key}`];
  }

  //Add un legume in the order
  add_order(key, veggie){
    var total = this.state.total *1;
    total += 1*1;
    this.setState({total});
    const order = {...this.state.order};
    order[ `${key}`] = veggie;
    this.setState({order});


    var total_price = this.state.total_price*1;
    this.setState({total_price})
    this.incrementVeggie( key );
    

  }

  delete_order(index, veggie){
    var total  = this.state.total*1;
    total = this.veggieEnOrder(index)*1;
    this.setState({total});

    const order = {...this.state.order};
    delete order[`${index}`];
    this.setState({order});

    var total_price = this.state.total_price*1;
    total_price -= veggie.price*1*this.veggieEnOrder(index)*1;
    this.setState({total_price})
  }

  incrementVeggie( key ){
    if(key in this.state.compteur){
      this.state.compteur[`${key}`] += 1*1;
    }else{
      this.state.compteur[`${key}`] = 1*1;
    }
  }

  render() {
    return (
      <div className="amap">
        <div className="menu">

        
          <Header tagline="Des bons legumes" />
          <ul className="list-of-veggies">
            { Object
                .keys(this.state.veggies).map( key => <Veggie key={key} add_order={this.add_order} details={this.state.veggies[key]}/>) 
            }
          </ul>
        </div>

        
        <Order delete_order = {this.delete_order} state={this.state} veggieEnOrder={this.veggieEnOrder} />
 
        <Inventory addVeggie={this.addVeggie} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;