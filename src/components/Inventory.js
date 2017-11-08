import React from 'react';
import AddFishForm from './AddFishForm';


class Inventory extends React.Component {
  constructor(){
    super();
    this.renderInventory = this.renderInventory.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e, key){
    const fish = this.props.fishes[key];
    console.log(fish);
    // Take a copy of fish and update with new data by using ... spread
    const updatedFish = {
      ...fish,
      // targets the name attribute and modifies the value
      [e.target.name]: e.target.value
    }
    this.props.updateFish(key, updatedFish)

    console.log(updatedFish);

  }

  renderInventory(key){
    const fish = this.props.fishes[key];
    return(
      <div className="fish-edit" key={key}>
        <input type="text" name="name" value={fish.name} placeholder="name"
          onChange={(e) => this.handleChange(e, key)}
        />
        <input type="text" name="price" value={fish.price} placeholder="price"/>
        <select type="text" name="status" value={fish.status} placeholder="status">
          <option value="available">Fresh !</option>
          <option value="uavailable"> Sold Out !</option>
        </select>
        <textarea type="text" name="desc" value={fish.desc} placeholder="desc">
          </textarea>
        <input type="text" name="image" value={fish.image} placeholder="image"/>
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
     </div>
    )
  }
  render(){
    return (
      <div>
        <p> Inventory </p>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} loadSamples={this.props.loadSamples} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
