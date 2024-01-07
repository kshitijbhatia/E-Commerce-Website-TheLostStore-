import React from 'react'
import './CartItem.css'

function CartItem(props) {

  const {name,price,image,count} = props;

  return (
    <div className='Item'>
        <img src={image} alt="" />
        <div className='Item_data'>
          <h2>{name}</h2>
          <h4>RS.{price}.00</h4>
          <div className='item_count'>
            <button>+</button>
            <p id='count'>{count}</p>
            <button>-</button>
          </div>
        </div>
    </div>
  )
}

export default CartItem