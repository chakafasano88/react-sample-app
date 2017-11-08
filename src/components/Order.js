import React from 'react';
import {formatPrice} from '../helpers';

class Order extends React.Component {
  constructor(){
    super()
    this.renderOrder = this.renderOrder.bind(this)
  }

  renderOrder(key){
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    if(!fish || fish.status ==='unavailable'){
      return <li key={key}>Sorry, {fish ? fish.name : 'fish'}
         is no longet available!</li>
    }

    return(
      <li key={key}>
        <span>{count}lbs {fish.name}</span>
        <span className="price">{count * fish.price}</span>
      </li>
    )

  }
  render(){
    // gets fish index and posts to Order
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) =>{
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available'
      if(isAvailable){
        return prevTotal + (count * fish.price || 0)
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <ul className="order">
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            <p>{formatPrice(total)}</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Order;
