import React, { useState, useEffect } from 'react';
import './Product.css';
import BackgroundVideo from '../../resources/BackgroundVideo.mp4';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import cartImage from '../../resources/cart.png'

function Product() {
    const navigate = useNavigate();
    const { type } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productID = queryParams.get('productID');

    // get product data from backend
    const [product,setProduct] = useState({});

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() =>{
        try{
            const response = await fetch('/api/product',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({type:type,productID:productID}),
            })
            const data = await response.json();
            setProduct(data);
            console.log(data);
        }catch(err){
            console.log("Error getting Product in Product Page ", err);
        }
    }


    // Change Size

    const [isOpen, setIsOpen] = useState(false);

    const ChangeDropdown = () => {
        setIsOpen(!isOpen);
    };

    const sizeArray = ['S', 'M', 'L', 'XL', 'XXL'];
    const [size, setSize] = useState(sizeArray[0]);

    function ChangeSize(e) {
        const newSize = e.target.textContent;
        setSize(newSize);
    }

    //Go back To Collection of Products

    function NavToCollections() {
        navigate(`/collections/${type}`);
    }
    
    // Add the product to cart

    const AddToCart = async () =>{
        try{
            const response = await fetch('/api/sendCartItem',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(product),
            })
        }catch(err){
            console.log("Error Sending Product to cart: ",err);
        }
    }

    function NavToCart(){
        navigate('/cart');
    }

    return (
        <div className='product_layout'>
            {/* <Cart /> */}
            <div className='product_container'>
                <video autoPlay loop muted>
                    <source src={BackgroundVideo} />
                </video>
                <h1>SWIFTCART</h1>
                <div className='cart_layout'>
                    <img src={cartImage} alt="" onClick={NavToCart} />
                </div>
                <div className='product'>
                    <img src={product?.img} alt="" />
                    <div className='product_description'>
                        <h2>{product?.name}</h2>
                        <h4>Details</h4>
                        <ul>
                            <li>Made with 100% pre-shrunk, ring-spun cotton for supreme softness </li>
                            <li>240 GSM Luxury Heavyweight - Oversized and boxy fit</li>
                            <li>Limited pieces only, won't be restocked</li>
                        </ul>
                        <div className='product_buttons'>
                            <h3>{`RS.${product?.price}.00`}</h3>

                            <p id='dropdown' onClick={ChangeDropdown}>
                                {size}
                            </p>
                            {isOpen && (
                                <div className='dropdown_content' onClick={ChangeDropdown}>
                                    {sizeArray.map((Size) => {
                                        if (Size !== size) {
                                            return <p onClick={ChangeSize}>{Size}</p>;
                                        }
                                    })}
                                </div> 
                            )}
                            <div className='product_buttons_container'>
                                <button id='cart_button' onClick={AddToCart}>Add To Cart</button>
                                <button id='keep_shopping_button' onClick={NavToCollections}>
                                    Keep Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Product