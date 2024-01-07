import React, { useState } from 'react'
import './ContactUsPage.css'
import Footer from '../Footer/Footer'
import BackgroundVideo from '../../resources/BackgroundVideo.mp4'
import { useNavigate } from 'react-router-dom'

function ContactUsPage() {

    const navigate = useNavigate();
    function NavToHomePage(){
        navigate('/')
    }

    const initialData = {
        first_name : "",
        last_name : "",
        email : "",
        order_no : "",
        subject : "",
        message : ""
    }
    const [data,setData] = useState(initialData);

    const sendData = async()=>{
        try{
            const response = await fetch('http://localhost:3000/api/getData',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if(response.ok){
                console.log("Data Sent Succesfully");
            }else{
                console.error("Error occured while sending data",response.status,response.statusText);
            }
        }catch(err){
            console.log("Error sending data to server",err);
        }
    }

    const getInput = (e)=>{
        const {id, value} = e.target;
        setData((prevData)=>{
            return{
                ...prevData,
                [id]:value
            }
        })
    }


  return (
    <div className='contact_page'>
        <div className='contact_page_layout'>
            <video autoPlay loop muted>
                <source src={BackgroundVideo}/>
            </video>
            <h1>SWIFTCART</h1>

            <div className='contact_page_container'>
                <h4>Allow 24-48 hours business days for a response to your inquiry.</h4>
                <div className='contact_page_inputs'>
                    <div className='input_name'>
                        <input onChange={getInput} value={data.first_name} autoComplete="off" id= 'first_name' type="text" placeholder='Enter First Name'/>
                        <input onChange={getInput} autoComplete="off" id='last_name' type="text" placeholder='Enter Last Name'/>
                    </div>
                    <div className='input_email_order'> 
                        <input onChange={getInput} autoComplete="off" id='email' type="text" placeholder='Enter Email Address'/>
                        <input onChange={getInput} autoComplete="off" id='order_no' type="text" placeholder='Enter Order No.'/>
                    </div>
                    <div className='input_message'>
                        <input onChange={getInput} autoComplete="off" id='subject' type="text" placeholder='Subject'/>
                        <textarea onChange={getInput} id = 'message' name=""  cols="40" rows="60" placeholder='Message'></textarea>
                    </div>
                </div>
                <div className='contact_page_buttons'>
                    <button onClick={sendData}>Send</button>
                    <button onClick={NavToHomePage}>Back To Home</button>
                </div>
            </div>

        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default ContactUsPage