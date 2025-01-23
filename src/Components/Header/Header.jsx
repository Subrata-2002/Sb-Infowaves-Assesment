import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className='sec'>

            <div className='first'>
                <p> Get 25% offer By Purchase product!</p>
            </div>

            <div className='second'>
                <div style={{ position: 'absolute', left:"140px"}}>
                    <img src="../Images/vertical LOGO.png" alt="" srcset="" />
                </div>
                <div >
                    <input type="search" id="gsearch" name="gsearch" className='srch' placeholder=' Search for products...' />
                    <img src="../Icon/Icon feather-search.png" alt="" className='srchIcon' />
                </div>

                <div className='item1'>
                    <img src="../Icon/Icon feather-phone-call.png   " alt="" className='Icons'/>
                    <div className='gaps'>
                        <span  className='text'>210-494-9998</span>
                        <span className='text2'>Contact Us</span>
                    </div>
                </div>

                <div className='item2'>
                    <img src="../Icon/Icon feather-user.png   " alt="" className='Icons'/>
                    <div className='gaps'>
                        <span className='text'>Login/Register</span>
                        <span className='text2'>Not logged in</span>
                    </div>
                </div>  
                <div className='item3'>
                    <img src="../Icon/Icon feather-shopping-cart.png   " alt="" className='Icons'/>
                    <div className='gaps'>
                        <span className='text'>Cart Total</span>
                        <span className='text2'>0 Items $ 0</span>
                    </div>
                </div>
            </div>

            <div className='third'>
               <div className='catgo'>
                <span className='spanText'>All Categories</span>
               </div>
               <div className='textcat'>
                <span style={{color:"black", width:"1300px", display:"contents"}}>Home Custom Flags Chloroplast Signs Banners Mesh Banners Window Cling Table Throws Floor Signage Business Cards Brochures Post Cards</span>
               </div>
            </div>
        </div>
    )
}

export default Header
