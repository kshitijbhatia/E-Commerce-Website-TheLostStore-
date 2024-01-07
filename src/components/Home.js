import React, { useEffect, useState } from 'react'
import './Home.css';
import Footer from './Footer/Footer.js';
import backgroundVideo from '../resources/BackgroundVideo.mp4'
import { useNavigate } from 'react-router-dom';
import Audio from '../components/AudioPlayer/Audio.js'

function Home() {

    const initialData = {
        first_name:"",
        last_name:"",
        email:"",
    }

    const [data,setData] = useState(initialData);

    const navigate = useNavigate();

    function NavToCollections(){
        navigate('/collections')
    }

    function NavToContactPage(){
        navigate('/contact')
    }

    function NavToRegPage(){
        navigate('/register')
    }

    useEffect(()=>{
        getUserData();
    },[])

    const getUserData = async () =>{
        try{
            const response = await fetch('http://localhost:3000/api/getUserData');
            const user = await response.json(); 
            setData(user);
        }catch(err){
            console.log("Error receing User Data ",err);
        }
    }


  return (
    <div className='homepage'>
        <div className='home'>

            <div className='login'>
                {data.first_name === "" ? <button onClick={NavToRegPage}>Register/Login</button> : <p>Hello {data.first_name} {data.last_name}</p>}
            </div>

            <div className='homepage_text'>
                <h1>SWIFTCART</h1>
                <button id='shop_button' onClick={NavToCollections}>SHOP</button>
                <button id='contact_button' onClick={NavToContactPage}>CONTACT US</button>
            </div>

            <video autoPlay loop muted>
                <source src={backgroundVideo} />
            </video>

        </div>

        <div className='footer'>
            <Footer />
        </div>        
        <Audio />
    </div>
  )
}

export default Home