import React, { useState } from 'react';
import './Products.css';
import Items from '../../products.json';

function Products({cart, setCart}) {

    const addToCart = (item) => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
          (product) => item.name === product.name
        );
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          itemInCart = {
            ...item,
            quantity: 1,
          };
          newCart.push(itemInCart);
        }
        setCart(newCart);
        // setCart([...cart, {...item}]);
        console.log(cart);
    }

    return (
        <>

        <img class="banner" src="/images/ProductsBanner.png" alt="Meet Your Maker HI Banner" />
        <div class="container">
            <div class="row justify-content-center">
                {
                    Items.map( (item, idx) => (
                            <div className="card col-3 m-3" key={ idx }>
                                <img class="card-img-top" src= { item.picture } alt= { item.name } />
                                <div class="card-body">
                                    <h5 class="card-title">{ item.name }</h5>
                                    <p class="card-text">{ item.description }</p>
                                    <div class="row">
                                        <p class="card-text"> ${ item.price }.00</p>
                                        <button type="button" onClick={() => addToCart(item)} class="btn btn-light">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
        </>
    )
}

export default Products
