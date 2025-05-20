import '../../css/cart/cart.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const CartTemplate = ({ item, index }) => {
    const [choose, setChoose] = useState(false);

    const handleClickChoose = () => {
        setChoose(!choose);
    }

    // Xu ly xoa san pham khoi gio hang
    const handleDelFromCart = async () => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const ID = item.ProductID;
        // console.log(`${backendUrl}/cart/addCart`);

        try {
            const cartRes = await axios.post(`${backendUrl}/cart/delCart`, { ID }, { withCredentials: true });
            window.location.reload();
        }
        catch (error) {
            window.alert('Bạn cần đăng nhập để thực hiện chức năng này!');
            throw error;
        }
    }

    return (
        <tr key={index}>
            <td onClick={handleClickChoose}>{choose ? <MdOutlineCheckBox className='icon1' /> : <MdOutlineCheckBoxOutlineBlank className='icon1' />}</td>
            <td>
                <div style={{ backgroundImage: `url(${item.ImageUrl || '/images/no-img.gif'})`, width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain' }} ></div>
            </td>
            <td>{item.ProductName}</td>
            <td>{item.Description}</td>
            <td>x{item.Quantity}</td>
            <td>{item.Price * item.Quantity} VNĐ</td>
            <td><MdDeleteForever className='icon2' onClick={handleDelFromCart} /></td>
        </tr>
    )
}

export default CartTemplate
