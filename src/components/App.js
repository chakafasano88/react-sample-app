import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import '../css/style.css';

// create first component
// 'THIS' is equal to the App class
class App extends React.Component{
  // Set your state!v
  constructor(){
    super()
    this.state = {
      fishes: {},
      order: {}
    };
    // Binds your methods to the App
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
  }


addFish(fish){
  // update state
  // set state
  const fishes = {...this.state.fishes}
  // Add in new fish
  const timestamp = Date.now();
  fishes[`fish-${timestamp}`] = fish;
  // set state. Set state of the thing that is changed
  this.setState({fishes})
}

// In order to access methods in othe components, pass them via props
loadSamples(){
  this.setState({
    fishes: sampleFishes
  });
}

  render(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          {/* 'tagline is a props' */}
          <Header tagline="Fresh Seafood Market" />
            <ul className="list-of-fishes">
              {
                // Returns the object as an array
                Object
                  .keys(this.state.fishes)
                  // Loops over array and assigns keys and gets fish details
                  // Takes in a list of keys, returns something else
                  .map(key => <Fish key={key} details={this.state.fishes[key]}  /> )
              }
            </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
