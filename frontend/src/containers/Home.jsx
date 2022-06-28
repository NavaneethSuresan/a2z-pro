import React, { useState, useEffect } from 'react';
import MainImage from '../components/Common/MainImage';
import rightarrow from '../assets/img/arrowright.png';
import leftarrow from '../assets/img/arrowleft.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import Subscribe from '../components/Common/Subscribe';
import Product from '../components/Common/Product';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import { Amazon, Featured } from '../constants';
import { fetchCarts } from '../reducks/cart/operations';
import { getCarts } from '../reducks/cart/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
// import { fetchCategories } from "../reducks/category/operations";
// import { getCategories } from "../reducks/category/selectors";
import { fetchProducts } from '../reducks/product/operations';
import { getProducts } from '../reducks/product/selectors';
import FeaturedItem from '../components/Common/FeaturedItem';
import AmazonItem from '../components/Common/AmazonItem';
const Home = () => {
    const query = new URLSearchParams(useLocation().search);
    const queryType = query.get('type');
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const products = getProducts(selector);
    // const categories = getCategories(selector);
    const carts = getCarts(selector);
    const [type, setType] = useState(queryType);

    const title = type ? (type === 'Amazon' ? Amazon : Featured) : 'Products List';
    const defaultSelect = type ? (type === 'Amazon' ? 'Amazon' : 'Featured') : 'FILTER BY TYPE';
    const isEmptyProduct = products.results && products.results.length > 0 ? false: true;
    const amazonProduct = products.results.filter(p => p.type === 'Amazon');
    const featuredProduct = products.results.filter(p => p.type === 'Featured');
    useEffect(() => {
        dispatch(fetchProducts({ type }));
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        // dispatch(fetchCategories());
        dispatch(fetchCarts());
        // eslint-disable-next-line
    }, []);
    console.log(amazonProduct);
    console.log(featuredProduct);
    return (
        <>
            <Header />
            <MainImage />
            {/* {!isEmptyProduct ? (
                
                   category.name &&!type ?(
                    
                    {amazonProduct.length > 0 && (
                        <Product labelType={Amazon} product={amazonProduct} carts={carts.results} />
                    )}
                
                    )
                
            ) :(<Product products={products.results} carts={carts.results}): (
                <Product products={products.results} carts={carts.results} />
            )} */}
            {/* <select defaultValue={defaultSelect} onChange={e => setType(e.target.value)} className="gender-select">
                <option value="">FILTER BY GENDER</option>
                <option value="male">Men's</option>
                <option value="female">Women's</option>
            </select> */}
            {/* {() => {
                if (!isEmptyProduct) {
                    {
                        amazonProduct.results > 0 && (
                            <Product labelType={Amazon} product={amazonProduct} carts={carts.results} />
                        );
                    }
                }
                if (!isEmptyProduct) {
                    {
                        featuredProduct.results > 0 && (
                            <FeaturedItem labelType={Featured} product={featuredProduct} carts={carts.results} />
                        );
                    }
                }
            }} */}

            {isEmptyProduct ? (
                type==='Amazon' ? (
                    <>
                        {title}{' '}
                        {amazonProduct.results > 0 && (
                            <AmazonItem labelType={Amazon} products={amazonProduct} carts={carts.results} />
                        )}
                        {/* {maleProduct.length > 0 && (
                            <ProductListCard labelType={Male} products={maleProduct} carts={carts.results} />
                        )} */}
                        {featuredProduct.results > 0 && (
                            <FeaturedItem labelType={Featured} products={featuredProduct} carts={carts.results} />
                        )}
                    </>
                ) : (
                    <Product products={products.results} carts={carts.results} />
                    // <h1 className="this">This is another trouble</h1>
                )
            ) : (
                <h1 className="emptymessage">Items Unavailable</h1>
            )}
            <Subscribe />
            <Footer />
        </>
    );
};

export default Home;
