import React from 'react';
import AmazonItem from '../Common/AmazonItem';
import FeaturedItem from './FeaturedItem';


export default function Product(props) {
    const { products, carts, labelType } = props;
    if (labelType) {
        return (
            <>
                <h4 class="todaysdetails">Amazing-Today's Deals</h4>

                {products.map(p => {
                    const cart = carts.find(c => c.product.id === p.id) || null;
                    return <AmazonItem key={p.id} products={p} cart={cart} />;
                })}
            </>
        );
    } else {
        return (
            <>
                <h4 class="todaysdetails">Amazing-Today's Deals</h4>

                {products.map(p => {
                    const cart = carts.find(c => c.product.id === p.id) || null;
                    return <FeaturedItem key={p.id} products={p} cart={cart} />;
                })}
            </>
        );
    }
}
