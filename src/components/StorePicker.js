import React from 'react';
import {render} from 'react-dom';

// create first component
class StorePicker extends React.Component{
  render(){
    return(
      <div>
        <form className="store-selector">
          <h2>Plese Enter A Store</h2>
          <input type="text" required placeholder="Store Name"/>
          <button type="submit">Visit Store</button>
        </form>
      </div>
    )
  }
}

export default StorePicker;
