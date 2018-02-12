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

    this.state = {
      veggies: {},
      order: {}
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


  add_order(key, veggie){
    console.log("JDHDH");
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

        
        <Order />
 
        <Inventory addVeggie={this.addVeggie} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;
