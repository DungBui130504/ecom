import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../css/items/ItemTemplate.css'
import { FaStar } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom';

const ItemTemplate = ({ productItem, oneProductData, hanleClickProduct, handleShowBanner, fav }) => {
    const [itemData, setItemData] = useState([]);
    const [bgImage, setBgImage] = useState('');
    const [isFav, setIsFav] = useState(false);

    // console.log(productItem.isFav);

    // Gio han ten
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }

    // Xu ly favorite product
    const handleFav = async (ID) => {
        setIsFav(!isFav);
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        try {
            const productResponse = await axios.put(`${backendUrl}/product/favProduct`, { ID }, { withCredentials: true });
            // console.log(productResponse.data);
        }
        catch (error) {
            console.log('Cannot add to favorite product');
            throw error;
        }
    }

    const handleDelFav = async (ID) => {
        setIsFav(!isFav);
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        try {
            const productResponse = await axios.put(`${backendUrl}/product/resetFavProduct`, { ID }, { withCredentials: true });
            // console.log(productResponse.data);
        }
        catch (error) {
            console.log('Cannot add to favorite product');
            throw error;
        }
    }

    // Xu ly nhan 1 san pham
    const handleClickProduct = (productItem) => {
        // console.log(productItem);
        oneProductData(productItem);
        hanleClickProduct(1);
    }

    // Xu ly anh loi
    useEffect(() => {
        setItemData(productItem);

        const img = new Image();
        img.src = itemData.ImageUrl;
        img.onload = () => setBgImage(itemData.ImageUrl);
        img.onerror = () => setBgImage('/images/loading-image.gif');
        // console.log(itemData);
    }, [productItem]);

    // Xu ly fav icon
    useEffect(() => {
        if (productItem.isFav || fav) {
            setIsFav(true);
        }
        else {
            setIsFav(false);
        }
    }, [productItem]);

    return (
        <div className='item' style={{ width: '100%', height: '25vh', cursor: 'pointer', position: 'relative', margin: '0px' }}>
            <div className='item-img' style={{
                backgroundImage: `url(${bgImage})`
            }}>
                {/* Icon trái tim */}
                <div className='hover'>
                    {isFav ? <IoMdHeart onClick={() => handleDelFav(productItem.ProductID)} /> : <IoIosHeartEmpty onClick={() => handleFav(productItem.ProductID)} />}
                </div>
            </div>

            {/* Nội dung dưới hình ảnh */}
            <div style={{ color: 'black', padding: '10px' }}>
                <a className='name-hover' onClick={() => { handleClickProduct(productItem); handleShowBanner(false) }}>{truncateText(productItem.ProductName, 16)}</a>
                <p>4 <FaStar /></p>
                <p>{productItem.Price} VNĐ</p>
            </div>
        </div >

    )
}

export default ItemTemplate
