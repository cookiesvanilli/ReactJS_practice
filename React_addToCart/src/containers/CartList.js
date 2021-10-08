import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectGoods} from '../store/goodsSlice';
import {selectCart} from '../store/cartSlice';
import Cart from '../components/Cart';
import {minusCart, deleteCart} from '../store/cartSlice'

function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    // переиндексирую массив товара
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});
    // console.log(goodsObj);
    const cartHandler = (event) => {
        event.preventDefault();
        let target = event.target;
        if (target.classList.contains('cart_min')) {
            dispatch(minusCart(target.getAttribute('data-key')));
        } else if (target.classList.contains('cart_delete')) {
            dispatch(deleteCart(target.getAttribute('data-key')));
        }
    }
    let sum = Object.keys(cart).reduce((accum, item) => {
        return accum += goodsObj[item]['cost'] * cart[item];
    }, 0);
    console.log(sum);

    return (
        <>
        <table onClick={cartHandler} className="cart_table">
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Cost</td>
                    <td>Count</td>
                    <td>Summ</td>
                </tr>
            </thead>
            <tbody>
            {Object.keys(cart).map((item) => <Cart keys={goodsObj[item]['articul']} 
                                                   title={goodsObj[item]['title']}
                                                   img={goodsObj[item]['image']}
                                                   cost={goodsObj[item]['cost']} 
                                                   articul={goodsObj[item]['articul']} 
                                                   count={cart[item]} />)}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total Cost</td>
                    <td>{sum}</td>
                </tr>
            </tfoot>
        </table>
        </>
    );
}

export default CartList;