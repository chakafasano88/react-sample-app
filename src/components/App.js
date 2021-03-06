import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
import base from "../base";
import "../css/style.css";

// create first component
// 'THIS' is equal to the App class
class App extends React.Component {
  // Set your state!
  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {}
    };
    // Binds your methods to the App
    this.addFish = this.addFish.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.removeFish = this.removeFish.bind(this);
  }
//Invokes immediately before rendering occurs
  addFish(fish) {
    // update state
    // set state. Mutates fish objects into an array
    const fishes = { ...this.state.fishes };
    console.log(fishes);
    // Add in new fish
    const timestamp = Date.now();
    // gives each fish an time Id
    fishes[`fish-${timestamp}`] = fish;
    // set state. Set state of the thing that is changed
    this.setState({ fishes });
  }

  updateFish(key, updatedFish){
    const fishes = {...this.state.fishes}
    fishes[key] = updatedFish
    this.setState({fishes })
  }

  removeFish(key){
    const fishes = {...this.state.fishes}
    fishes[key] = null;
    this.setState({ fishes });
  }

  // In order to access methods in other components, pass them via props
  // We can modify state in this funcion so that fishes = something
  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder(key) {
    // take a copy of our state
    const order = { ...this.state.order };
    // update or add new number of fish ordered
    order[key] = order[key] + 1 || 1;
    // update state
    this.setState({ order });
  }

  componentWillMount(){
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`
      ,{
      context: this,
      state: 'fishes'
    })
  }

  componentWillUnmount(){
    base.removeBinding(this.ref)
  }
// Setting Local Storage
// localStorage.setItem('') sets a key and value
// Cannot store objects inside local storage. Only strings!
  componentWillUpdate(nextProps, nextState){
    console.log('Something Changed');
    localStorage.setItem(`order-${this.props.params.StoreId}`,
      JSON.stringify(nextState.order))
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          {/* 'tagline is a props' */}
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {// Returns the object as an array
            Object.keys(this.state.fishes)
              // Loops over array and assigns keys and gets fish details
              // Takes in a list of keys, returns something else
              // Don't ever touch the key, store in a different prop
              .map(key => (
                <Fish
                  key={key}
                  index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />
              ))}
          </ul>
        </div>
        {/* Props allow us to access, any information we put in to them..
          functions, strings, booleans etc...
           */}
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          params={this.props.params}
        />
        <Inventory
          addFish={this.addFish}
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          removeFish={this.removeFish}
        />
      </div>
    );
  }
}

export default App;
