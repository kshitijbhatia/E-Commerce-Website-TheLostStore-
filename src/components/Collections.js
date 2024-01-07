import React from 'react'
import Footer from './Footer/Footer.js'
import BackgroundVideo from '../resources/BackgroundVideo.mp4'
import './Collections.css'
import { useNavigate } from 'react-router-dom'
import Audio from './AudioPlayer/Audio.js'
import cartImage from '../resources/cart.png'

function Collections() {
    const navigate =  useNavigate();

        function NavToClothes(e){
            const type = e.target.value
            navigate(`/collections/${type}`)
        }    

        function NavToCart(){
            navigate('/cart');
        }

  return (
    <div className='collections_layout'>
        <div className='collections'>
            <video autoPlay loop muted>
                <source src={BackgroundVideo}/>
            </video>
            <h1>SWIFTCART</h1>
            <div className='cart_layout'>
                <img src={cartImage} alt="" onClick={NavToCart} />
            </div>
        </div>

        <div className='collections_items'>
                <button id='button1' value='t-shirts-1' onClick={NavToClothes}>T-Shirts</button>
                <button id='button2' value='tote-bags-1' onClick={NavToClothes}>Tote Bag</button>
                <button id='button3' value='cargos-1' onClick={NavToClothes}>Cargos</button>
                <button id='button4' value='accessories-1' onClick={NavToClothes}>Accesories</button>
        </div>

        <div>
            <Footer />
        </div>
        <Audio/>
    </div>
  )
}

export default Collections




// const currentTD = new Date();

        // const year = currentTD.getFullYear();
        // const month = currentTD.getMonth() + 1;
        // const day = currentTD.getDate();

        // const date = `${day}-${month}-${year}`;

        // const hours = currentTD.getHours();
        // const minutes = currentTD.getMinutes();

        // const time = `${hours}:${minutes}`

        // function updateClock() {
        //     const currentDateAndTime = new Date();
        //     const formattedDateTime = currentDateAndTime.toLocaleString();
        //     console.log(formattedDateTime);
        //   }
        //   setInterval(updateClock, 1000); 