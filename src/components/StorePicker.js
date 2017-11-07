import React from 'react';
import {getFunName} from '../helpers';

// create first component
class StorePicker extends React.Component{
  constructor(){
    super();
    this.goToStore = this.goToStore.bind(this);
  }
  goToStore(event){
    event.preventDefault();
    console.log('You Changed the URL');
    console.log(this.storeInput.value);
    const storeId = this.storeInput.value
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  // Render methods are bound to component(this = the class)
  render(){
    return(
      <div>
        <form className="store-selector" onSubmit={this.goToStore}>
          {/* Comments cannot be at the top of render block */}
          <h2>Plese Enter A Store</h2>
          <input type="text" required placeholder="Store Name"
            defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
          <button type="submit" >Visit Store</button>
        </form>
      </div>
    )
  }
}

// Surfaces router from the parent
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
