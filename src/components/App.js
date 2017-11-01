import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'



// create first component
class App extends React.Component{
  render(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header/>
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
}

export default App;