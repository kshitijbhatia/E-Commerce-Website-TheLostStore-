import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

function Footer() {

  const navigate = useNavigate();

  function NavToPages(e){
    const type = e.target.textContent;
    navigate(`/pages/${type}`)
    window.location.reload();
  }

  return (
    <div className='footer_layout'>
        <div className='footer_body'>
            <div className='footer_links'>
              <h3>Links</h3>
              <div className='footer_links_names'>
                <p onClick={NavToPages}>Search</p>
                <p onClick={NavToPages}>Refunds</p>
                <p onClick={NavToPages}>Privacy</p>
                <p onClick={NavToPages}>Shipping</p>
                <p onClick={NavToPages}>Terms</p>
              </div>
              
            </div>
    
            <div className='footer_email'>
              <h3>SWIFTCART</h3>
              <p>Enter your Email to subscribe to our newsletter</p>
              <input type="text" placeholder='Enter Email' />
              <button>Submit</button>
            </div>
        </div>

        <div className='footer_text'>
          <p>@2023 SWIFTCART</p>
        </div>
    </div>
  )
}

export default Footer