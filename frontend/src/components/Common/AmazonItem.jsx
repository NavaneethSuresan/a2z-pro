import React from 'react';

import { useDispatch } from 'react-redux';

import { addCart, removeCart, updateCart } from '../../reducks/cart/operations';
export default function AmazonItem(props) {
    const { id, name, price, image } = props;
    let quantity = props.cart ? props.cart.quantity : 0;
    const cartId = props.cart ? props.cart.id : 0;

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addCart({ quantity: 1, product: id }));
    };

    const increaseCart = () => {
        ++quantity;
        dispatch(updateCart({ quantity }, cartId));
    };

    const decreaseCart = () => {
        --quantity;
        if (quantity <= 0) {
            dispatch(removeCart(cartId));
        }
        dispatch(updateCart({ quantity }, cartId));
    };
    return (
        <div class="page-wrapper">
            <h4 class="todaysdetails">Amazing-Today's Deals</h4>
            <div class="post-wrapper">
                <div class="post">
                    <img src={image} class="slider-image" />

                    <div class="post-info">
                        <h2 class="productnames">
                            {name}
                            <br />$ {price}
                        </h2>
                        {/* <button class="cartbutton">Add To Cart</button> */}
                        {quantity > 0 ? (
                            <div className="added-cart">
                                <span onClick={decreaseCart}> - </span>
                                <span className="margin-top-4"> {quantity} </span>
                                <span onClick={increaseCart} className="margin-top-4">
                                    +
                                </span>
                            </div>
                        ) : (
                            <button onClick={addToCart} className="cartbutton">
                                Add +
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
