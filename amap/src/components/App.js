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
    var total_price = this.state.total_price;
    total_price += veggie.price * 1;
    this.setState({total_price})
    this.incrementVeggie( key );
    

  }


  removeVeggieEnState( key ){
    if(key in this.state.compteur){
      delete this.state.compteur[`${key}`];
    }
  }

  delete_order(index, veggie){
    var total  = this.state.total*1;
    total -= this.veggieEnOrder(index)*1;
    this.setState({total});

    const order = {...this.state.order};
    delete order[`${index}`];
    this.setState({order});

    console.log(this.total);
    var total_price = this.state.total_price*1;
    total_price -= veggie.price*1*this.veggieEnOrder(index)*1;
    this.setState({total_price})

    this.removeVeggieEnState(index);
  }

  incrementVeggie( key ){
    if(key in this.state.compteur){
      this.state.compteur[`${key}`] += 1*1;
    }else{
      this.state.compteur[`${key}`] = 1*1;
    }
  }


  //LocalStorage

 
  //fonction pour preparer a chaque mise a jour
  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('order', JSON.stringify(nextState.order));
    localStorage.setItem('total_price', JSON.stringify(nextState.total_price));
    localStorage.setItem('compteur',JSON.stringify(nextState.compteur));
    localStorage.setItem('total', JSON.stringify(nextState.compteur));
    localStorage.setItem('props', JSON.stringify(nextProps));
  }

  //fonction ejecute avant de faire render
  componentWillMount(){
    localStorage.getItem('order') && this.setState({
      order: JSON.parse(localStorage.getItem('order'))
    });


    localStorage.getItem('total_price') && this.setState({
      total_price: JSON.parse(localStorage.getItem('total_price'))
    });

    localStorage.getItem('compteur') && this.setState({
      compteur: JSON.parse(localStorage.getItem('compteur'))
    });

    localStorage.getItem('total') && this.setState({
      total: JSON.parse(localStorage.getItem('total'))
    });
  }

 //Fonction qui se demarre au moment de quitter l'app
  componentWillUnmount(){
    localStorage.setItem('order', JSON.stringify(this.state.order));
    localStorage.setItem('total_price', JSON.stringify(this.state.total_price));
    localStorage.setItem('compteur', JSON.stringify(this.state.compteur));
    localStorage.setItem('total', JSON.stringify(this.state.total));

  }


  render() {
    return (
      <div className="amap">
        <div className="menu">

        
          <Header tagline="Des bons legumes" />
          <ul className="list-of-veggies">
            { Object
                .keys(this.state.veggies)
                .map( key => <Veggie key={key} index={key} add_order={this.add_order} details={this.state.veggies[key]}/>) 
            }
          </ul>
        </div>

        
        <Order  total_price={this.state.total_price} delete_order = {this.delete_order} state={this.state} veggieEnOrder={this.veggieEnOrder} />
 
        <Inventory addVeggie={this.addVeggie} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;