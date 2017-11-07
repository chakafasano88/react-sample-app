import React from 'react';
import {formatPrice} from '../helpers';
class Order extends React.Component {
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
