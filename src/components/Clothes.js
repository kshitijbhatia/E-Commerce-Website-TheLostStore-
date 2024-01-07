import React, { useEffect, useState } from 'react';
import './Clothes.css';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from './Footer/Footer';
import Cloth from './Cloth';
import BackgroundVideo from '../resources/BackgroundVideo.mp4';
import cartImage from '../resources/cart.png'

function Clothes() {
  const { type } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const [clothes, setClothesData] = useState([]);

  const fetchData = async () =>{
    try{
      const response = await fetch('/api/clothes',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({type:type})
      }) 

      const data = await response.json();
      setClothesData(data);
    }catch(err){
      console.log("Error getting data in clothes page: ",err);
    }
  }

  function NavToCart(){
    navigate('/cart');
  }

  return (
    <div className='clothes_page'>
      <div className='clothes_layout'>
        <video autoPlay loop muted>
          <source src={BackgroundVideo} />
        </video>
        <h1>SWIFTCART</h1>
        <div className='cart_layout'>
                <img src={cartImage} alt="" onClick={NavToCart} />
        </div>
        <div className='clothes'>
          {clothes.map((cloth) => (
            <Cloth
              key={cloth.id}
              name={cloth.name}
              img={cloth.img}
              price={cloth.price}
              type={type}
              id={cloth.id}
            />
          ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Clothes;