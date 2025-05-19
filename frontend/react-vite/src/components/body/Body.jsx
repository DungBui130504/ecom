import React, { useState, useEffect } from 'react'
import axios, { all } from 'axios';
import '../../css/body/body.css'
import Item from '../items/Item'
import ItemDetail from '../items/ItemDetail';

const Body = ({ cateProduct, favProduct }) => {
    const [allData, setAllData] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [favProductData, setFavProductData] = useState([]);
    const [more, setMore] = useState(24);
    const [isOut, setIsOut] = useState(false);
    const [noData, setNoData] = useState(false);
    const [noFavData, setNoFavData] = useState(true);
    const [oneProductData, setOneProductData] = useState({});
    const [isDisplayProduct, setIsDisplayProduct] = useState(0);
    const [cartInfor, setCartInfor] = useState({});


    const handleGetMoreProducts = () => {
        setMore(prev => {
            const newMore = prev + 12;
            const newData = allData.slice(0, newMore);
            setProductsData(newData);

            if (newMore >= allData.length) {
                setIsOut(true);
            }

            return newMore;
        });
    }

    const handleOneProductDetail = (product) => {
        setOneProductData(product);
        // console.log(oneProductData);
    }

    const hanleClickProduct = (status) => {
        setIsDisplayProduct(status);
        // console.log(isDisplayProduct);
    }

    useEffect(() => {
        const getProducts = async () => {
            const backendUrl = import.meta.env.VITE_BACKEND_URL;
            try {
                const productResponse = await axios.get(`${backendUrl}/product/products`, { withCredentials: true });
                // console.log(productResponse.data);
                setAllData(productResponse.data);
                setProductsData(productResponse.data.slice(0, more));

                if (productResponse.data.length == 0) {
                    setNoData(true);
                }
                else {
                    setNoData(false);
                }
            }
            catch (error) {
                console.log('Cannot get products infor');
                throw error;
            }
        }

        getProducts();
    }, []);

    useEffect(() => {
        const newData = allData.filter(product => product.CategoryID == cateProduct);
        setProductsData(newData);
        // console.log(newData);
        if (newData.length == 0) {
            setNoData(true);
        }
        else {
            setNoData(false);
        }
    }, [cateProduct]);

    useEffect(() => {
        const getFavProducts = async () => {
            const backendUrl = import.meta.env.VITE_BACKEND_URL;
            try {
                const productResponse = await axios.get(`${backendUrl}/product/favProducts`, { withCredentials: true });
                // console.log(productResponse.data);
                setFavProductData(productResponse.data);

                if (productResponse.data.length == 0) {
                    setNoFavData(true);
                }
                else {
                    setNoFavData(false);
                }
            }
            catch (error) {
                console.log('Cannot get products infor');
                throw error;
            }
        }

        getFavProducts();
    }, [favProduct]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {noFavData && favProduct == 1 && <div className='container-fluid' style={{ height: '15vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p>Không có sản phẩm yêu thích nào!!!</p>
            </div>}

            {favProduct == 1 && <Item products={favProductData} oneProductData={handleOneProductDetail} hanleClickProduct={hanleClickProduct} />}

            {favProduct == 1 &&
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '50px' }}>
                    <div style={{ background: 'black', width: '30vw', height: '1px' }}></div>
                    <p>Xem thêm</p>
                    <div style={{ background: 'black', width: '30vw', height: '1px' }}></div>
                </div>
            }

            {isDisplayProduct == true && <ItemDetail oneProductData={oneProductData} />}

            <div className='container-fluid' style={{
                backgroundImage: 'url(/images/no-data.gif)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                height: '50vh',
                width: '90vw',
                display: noData ? 'block' : 'none',
                textAlign: 'center'
            }}></div>

            <Item products={productsData} oneProductData={handleOneProductDetail} hanleClickProduct={hanleClickProduct} />

            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                padding: '15px'
            }}>
                <button className='more-btn' onClick={handleGetMoreProducts}
                    style={{
                        display: isOut ? 'none' : 'block',
                        marginTop: '30px'
                    }}
                >View More</button>
            </div>
        </div>
    )
}

export default Body
