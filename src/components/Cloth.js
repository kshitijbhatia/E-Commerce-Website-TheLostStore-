import React from 'react'
import './Cloth.css'
import { useNavigate } from 'react-router-dom'

function Cloth(props) {

  const navigate = useNavigate();

  function NavToProduct(){
    navigate(`/collections/${props.type}/products?productID=${props.id}`)
  }

  return (
    <div className='cloth_map' onClick={NavToProduct}>
        <img src={props.img} alt="" width='350px' height='300px'/>
        <p id='cloth_name'>{props.name}</p>
        <p id='price'>{`Rs.${props.price}`}</p>
    </div>
  )
}

export default Cloth