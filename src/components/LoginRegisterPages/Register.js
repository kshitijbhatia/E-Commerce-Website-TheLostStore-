import React from 'react'
import './Register.css';
import Footer from '../Footer/Footer'
import BackgroundVideo from '../../resources/BackgroundVideo.mp4';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Register() {

    const navigate = useNavigate();

    const NavToLoginPage = ()=>{
        navigate('/login')
    }

    const initialData = {
      first_name:"",
      last_name:"",
      email:"",
      password:""
    }

    const [data,setData] = useState(initialData);

    const getRegData=(e)=>{
      const {id, value} = e.target;
      setData((prevdata)=>{
        return{
          ...prevdata,
          [id]:value
        }
      })
    }

    const SendRegData = async ()=>{
      try{
        const response = await fetch('http://localhost:3000/api/getRegData',{
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        if(response.ok){
          console.log("Data Sent Succesfully");
          navigate('/')
        }
        
      }catch(err){
        console.log(err);
      }
    }

  return (
    <div className='register_page'>
      
      <div className='register_container'>

        <video autoPlay muted loop>
          <source src={BackgroundVideo}/>
        </video>

        <h1>SWIFTCART</h1>

        <div className='register_input'>
          <div className='register_name'>
            <input type="text" value={data.first_name} onChange={getRegData}  id='first_name' placeholder='Enter First Name'/>
            <input type="text" value={data.last_name} onChange={getRegData} id='last_name' placeholder='Enter Last Name'/>
          </div>
          <div className='email_pass'>
            <input type="text" value={data.email} onChange={getRegData} id='email' placeholder='Enter Email Address'/>
            <input type="password" value={data.password} onChange={getRegData} id='password' placeholder='Enter Password'/>
            {/* <input type="password" placeholder='Re-Enter Password'/> */}
          </div>

          <button id='register' onClick={SendRegData}>Register</button>
          <p>If you are already a member, <a onClick={NavToLoginPage}>Log In</a></p>
        </div>

      </div>

      

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Register