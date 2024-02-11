import './Slider_Products.css';
import React, { useState, useEffect } from 'react';
import { productCatalog } from '../../lib/productosCatalogo';

function SliderProducts() {
    const [randomNumber, setRandomNumber] = useState(null);
    const getRandomNumber = () => {
        return Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    };
    useEffect(() => {
        setRandomNumber(getRandomNumber());
    }, []);

    function getRandomProducts(productCatalog, numProducts) {
        const shuffledProducts = productCatalog.sort(() => Math.random() - 0.5);
        return shuffledProducts.slice(0, numProducts);
    }

    return (
        <section className='p-slider'>
            {getRandomProducts(productCatalog, 4).map((producto, index) => {
                return (
                    <div className='slider-background' key={index}>
                        <div className="product-box">
                            <span className='p-discount'>-{randomNumber}%</span>
                            <div className="p-img-container">
                                <div className='p-img'>
                                    <a href="" className='imgs-slider'>
                                        <img src={producto.image} className='imag-cards-productos' alt="Front" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-box-text">
                                <div className="product-category">
                                    <span>{producto.category}</span>
                                </div>
                                <a href="" className='product-title'>
                                    {producto.model}
                                </a>
                                <div className="price-buy">
                                    <span className='p-price'>{producto.price}$</span>
                                    <a href="" className='buy-btn'>Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default SliderProducts;