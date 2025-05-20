import React, { useState } from 'react'
import axios from 'axios'
import Nav from '../nav-bar/Nav';
import Banner from '../banner/Banner'
import Body from '../body/Body';
import Footer from '../footer/Footer';

const Homepage = () => {
    const [cateProduct, setCateProduct] = useState(0);

    const [favProduct, setFavProduct] = useState(0);

    const [showBanner, setShowBanner] = useState(true);

    const [showCart, setShowCart] = useState(false);

    const handleCateProduct = (ID) => {
        setCateProduct(ID);
    }

    const handleFavProduct = (status) => {
        setFavProduct(status);
    }

    const handleShowBanner = (status) => {
        setShowBanner(status);
    }

    const handleShowCart = (status) => {
        setShowCart(status)
    }

    return (
        <div>
            <Nav handleCateProduct={handleCateProduct} handleFavProduct={handleFavProduct} handleShowCart={handleShowCart} />
            {showBanner == true && <Banner />}
            <Body cateProduct={cateProduct} favProduct={favProduct} handleShowBanner={handleShowBanner} showCart={showCart} handleShowCart={handleShowCart}/>
            <Footer />
        </div>
    )
}

export default Homepage
