import React, { useEffect, useState } from 'react';
import '../../css/cart/cart.css';
import CartTemplate from './CartTemplate';

const Cart = ({ cartData }) => {

    return (
        <>
            {cartData.length !== 0 ?
                <div style={{ width: '90vw', minHeight: '65vh', marginTop: '15vh' }}>
                    <table className="table table-hover cart-table">
                        <colgroup>
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '15%' }} />
                            <col style={{ width: '35%' }} />
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '10%' }} />
                        </colgroup>
                        <tbody>

                            {
                                cartData.map((item, index) => {
                                    return (
                                        <CartTemplate item={item} index={index} />
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div >
                :
                <div className='container-fluid' style={{
                    backgroundImage: 'url(/images/no-data.gif)',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    minHeight: '80vh',
                    width: '25vw',
                    textAlign: 'center'
                }}></div>
            }
        </>
    )
}

export default Cart
