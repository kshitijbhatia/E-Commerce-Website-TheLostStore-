import React from 'react'
import './page.css'
import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import BackgroundVideo from '../../resources/BackgroundVideo.mp4'

function Page() {
    const navigate = useNavigate();
    const { type }= useParams();

    function NavToHomePage(){
        navigate('/')
    }

  return (
    <div className='page_layout'>
        <div className='page_container'>
            <video autoPlay loop muted>
                <source src={BackgroundVideo}/>
            </video>
            <h1>SWIFTCART</h1>
            <div className='page_content'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
            </div>
            <button id='back_home_button' onClick={NavToHomePage}>Back Home</button>
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Page