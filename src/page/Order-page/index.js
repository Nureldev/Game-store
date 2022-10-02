import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from '../../components/Order-Item';
import { calcTotalPrice } from '../../components/utils';



const OrderPage = () => {

    const items = useSelector((state) => state.cart.itemInCart)

    if(items.length < 0) {
        return <h1>Ваша корзина пуста</h1>
    }

    return (
        <div className='order-page'>
            <div className='order-page__left'>
                {items.map(game => <OrderItem game={game}/>)}
            </div>
            <div className='order-page__reght'>
                <div className='order-page__total-price' style={{fontSize:"30px", fontWeight:"bold"}}>
                 {items.length} товаров на сумму  ( {calcTotalPrice(items)}) руб.
                </div>
            </div>  
        </div>
    );
};

export default OrderPage;