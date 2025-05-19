import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import '../../css/items/itemDetail.css';
import { FiPlus } from "react-icons/fi";
import { HiOutlineMinusSm } from "react-icons/hi";
import { FaMinus } from 'react-icons/fa';
import { Prev } from 'react-bootstrap/esm/PageItem';

const ItemDetail = ({ oneProductData }) => {
    const [bgImage, setBgImage] = useState('');
    const [productQuantity, setProductQuantity] = useState(1);
    // console.log(oneProductData);

    // Xu ly them san pham vao gio hang
    const handleAddToCart = async () => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const ID = oneProductData.ProductID;
        if (productQuantity === 0) {
            window.alert('Bạn phải chọn số lượng mua ít nhất là 1 !');
            return;
        }
        // console.log(`${backendUrl}/cart/addCart`);

        try {
            const cartRes = await axios.post(`${backendUrl}/cart/addCart`, { ID, productQuantity }, { withCredentials: true });
            // console.log(cartRes.data);

        }
        catch (error) {
            console.log('Cannot add product to cart');
            throw error;
        }
    }

    // Xu ly anh loi
    useEffect(() => {
        const img = new Image();
        img.src = oneProductData.ImageUrl;
        img.onload = () => setBgImage(oneProductData.ImageUrl);
        img.onerror = () => setBgImage('/images/loading-image.gif');
    }, [oneProductData]);

    return (
        <>
            <div className='item-container' style={{
                // background: 'green',
                marginTop: '10vh',
                display: 'flex',
                gap: '10vw',
                justifyContent: 'space-evenly',
                // alignItems: 'center',
                width: '80vw'
            }}>

                <div id="carouselExampleAutoplaying" className="carousel slide my-carousel" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={bgImage || '/images/loading-image.gif'} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={bgImage || '/images/loading-image.gif'} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={bgImage || '/images/loading-image.gif'} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className='item-option'>
                    <div className='item-desc'>
                        <p className='name'>{oneProductData.ProductName}</p>
                        <p className='desc'>{oneProductData.Description}</p>
                        <p className='price'>{oneProductData.Price} VNĐ</p>
                    </div>
                    <div className='item-btn'>
                        <div className='update-Quantity'>
                            <button className='button-23' onClick={() => { setProductQuantity(prev => prev + 1) }}><FiPlus /></button>
                            <p>{productQuantity}</p>
                            <button className='button-23' onClick={() => setProductQuantity((prev) => {
                                if (prev === 0) {
                                    return 0;
                                }
                                return prev - 1;
                            })
                            } > <FaMinus /></button>
                        </div>
                        {productQuantity == 0 && <p style={{ color: 'red', fontStyle: 'italic' }}>Bạn phải chọn ít nhất 1 sản phẩm!</p>}
                        <button className='button-89' onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                        <button className='button-86'>Mua sản phẩm này</button>
                    </div>
                </div>

            </div >

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '50px' }}>
                <div style={{ background: 'black', width: '20vw', height: '1px' }}></div>
                <p>Sản phẩm khác</p>
                <div style={{ background: 'black', width: '20vw', height: '1px' }}></div>
            </div>
        </>
    )
}

export default ItemDetail
