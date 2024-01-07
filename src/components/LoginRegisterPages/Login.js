import React, { useState } from 'react'
import './Login.css'
import Footer from '../Footer/Footer'
import BackgroundVideo from '../../resources/BackgroundVideo.mp4';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [loginSuccess,setLoginSuccess] = useState(0);

  const initialData = {
    email:"",
    password:"",
  }

  const [data,setData] = useState(initialData);

  const getLogData = (e) =>{
    const {id,value} = e.target;
    setData((prevdata)=>{
      return{
        ...prevdata,
        [id] : value,
      }
    })
  }

  const sendLogData = async () =>{
    try{
      const response = await fetch('http://localhost:3000/api/getLogData',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if(response.ok){
      console.log("Data Sent Successfuly")
      navigate('/')
    }
    
    }catch(err){
      console.log("Error sending Data: ",err);
    }
  }

  return (
    <div className='login_page'>
      
      <div className='login_container'>

        <video autoPlay muted loop>
          <source src={BackgroundVideo}/>
        </video>

        <h1>SWIFTCART</h1>

        <div className='login_input'>

            <input type="text" onChange={getLogData} id='email' placeholder='Enter Email'/>
            <input type="password" onChange={getLogData} id='password' placeholder='Enter password'/>
            <button id='login_button' onClick={sendLogData}>Log In</button>
            {setLoginSuccess === 2 && <h4>Username or Password Incorrect</h4>}
        </div>

      </div>

      

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Login