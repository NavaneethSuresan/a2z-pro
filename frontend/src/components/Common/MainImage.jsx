import React from 'react';
import leftarrow from '../../assets/img/arrowleft.png';
import rightarrow from '../../assets/img/arrowright.png';
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';
import Banner from '../../assets/img/banner.png';
import Slider from 'react-slick';
import Headphones from '../../assets/img/headphone.png';
import Watch from '../../assets/img/watch.png';
import Shoes from '../../assets/img/shoes.png';
import Luggage from '../../assets/img/bag.png';
import Jacket from '../../assets/img/jacket.png';
const MainImage = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={'slick-arrow'}
                style={{
                    ...style,
                    display: 'block'
                }}
                onClick={onClick}
            >
                <img src={rightarrow} class="nexts" alt="" />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={'slick-arrow'}
                style={{
                    ...style,
                    display: 'block'
                }}
                onClick={onClick}
            >
                <img src={leftarrow} class="previous" alt="" />
            </div>
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,

        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <>
            <section class="first">
                <img src={Banner} alt="" />
            </section>

            <section class="featuredrecomendations">
                <h3 class="heading1">Your recently viewed items & featured recomendations</h3>

                <div class="arrows">
                    {/* <i class="fas fa-arrow-left previous"></i>
                    <i class="fas fa-arrow-right nexts"></i> */}
                    {/* <img src={leftarrow} class="previous" alt="" />
                    <img src={rightarrow} class="nexts" alt="" /> */}

                    <div class="post-slider">
                        <Slider {...settings}>
                            <div class="item1">
                                <img src={Headphones} alt="" class="headphones" />
                                <h4 class="productname">Headphones</h4>
                                <h5 class="description">BEATS BY DR.DRE</h5>
                                <h3 class="cost">$200</h3>
                            </div>
                            <div class="item1" style={{ width: '250px' }}>
                                <img src={Watch} alt="" class="headphones" />
                                <h4 class="productname">Watch</h4>
                                <h5 class="description">BEATS BY DR.DRE</h5>
                                <h3 class="cost">$200</h3>
                            </div>
                            <div class="item1">
                                <img src={Shoes} alt="" class="headphones" />
                                <h4 class="productname">Shoes</h4>
                                <h5 class="description">BEATS BY DR.DRE</h5>
                                <h3 class="cost">$200</h3>
                            </div>
                            <div class="item1">
                                <img src={Luggage} alt="" class="headphones" />
                                <h4 class="productname">Luggage Bag</h4>
                                <h5 class="description">BEATS BY DR.DRE</h5>
                                <h3 class="cost">$200</h3>
                            </div>
                            <div class="item1">
                                <img src={Jacket} alt="" class="headphones" />
                                <h4 class="productname">Jacket</h4>
                                <h5 class="description">BEATS BY DR.DRE</h5>
                                <h3 class="cost">$200</h3>
                            </div>
                            <div class="item1">
                                <img src={Jacket} alt="" class="headphones" />
                                <h4 class="productname">Jacket</h4>
                                <h5 class="description">BEATS BY DR.DRE</h5>
                                <h3 class="cost">$200</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainImage;
