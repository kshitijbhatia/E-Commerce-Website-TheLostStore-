import React, { useEffect, useState } from 'react'
import './Cart.css'
import BackgroundVideo from '../../resources/BackgroundVideo.mp4';
import Footer from '../Footer/Footer';
import CartItem from './CartItem';

function Cart() {

  const [cart,setCart] = useState([]);

  useEffect(()=>{
    getCartData()
  },[])

  const getCartData = async() =>{
    try{
      const response = await fetch('/api/getCartData');
      const data =  await response.json();
      setCart(data);
      console.log(data);
    }catch(err){
      console.log("Error gettin Cart Data:",err);
    }
  }

  return (
    <div className='cart_container'>
      <div className='cart_items'>
          <video autoPlay loop muted>
                    <source src={BackgroundVideo}/>
                </video>
          <h1>SWIFTCART</h1>

          <div className='cart_items_map'>
            {
              cart.map((cloth)=>{
                return(
                  <CartItem
                  name = {cloth.name}
                  price = {cloth.price}
                  image = {cloth.img}
                  count = {cloth.added_items}
                  />
                )
              })
            }
          </div>
      </div>

      <Footer />
    </div>
  )
}

export default Cart