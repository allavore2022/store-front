import React from 'react';

function Cart({ cart, setCart }) {
    const getTotalSum = () => {
        let ans = 0;
        cart.map((item) => (ans += item.quantity * item.price));
        return ans;
      };
    
    const removeFromCart = (productToRemoce => {
        setCart(cart.filter((item) => item !== productToRemoce))
    });

    const quantityChange = (item, d) => {
        const ind = cart.indexOf(item);
        const arr = cart;
        arr[ind].quantity += d;
    
        if (arr[ind].quantity === 0) arr[ind].quantity = 1;
        setCart([...arr]);
      };
    
    return (
        <>
        <img class="banner" src="images/Cart.png" alt="Cart banner" />

        <div class="container">
            <div class="row justify-content-center">
            {
                cart.map( (item, idx) => (
                        <div className="card col-3 m-3" key={ idx }>
                            <img class="card-img-top" src= { item.picture } alt= { item.name } />
                            <div class="card-body">
                                <h5 class="card-title">{ item.name }</h5>
                                <div class="row">
                                    <p class="card-text"> ${ item.price }.00</p>
                                </div>
                                <div class="row">
                                    <button class="btn btn-light" onClick={() => removeFromCart(item)}>
                                    Remove
                                    </button>
                                    <button class="btn btn-light" onClick={() => quantityChange(item, 1)}>+</button>
                                    <button class="btn btn-light">{item.quantity}</button>
                                    <button class="btn btn-light"onClick={() => quantityChange(item, -1)}>-</button>
                                </div>
                            </div>
                        </div>
                        
                    )
                )//end of cart loop
            }
            </div>
        <div>
            <h1>Total Cost: ${getTotalSum()}</h1>
            </div> 
        </div>
        </>
    )
}

export default Cart
