import React, {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ cart }) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo"><img class="logo" src="https://allavore2022.github.io/store-front/images/logo.png" alt="Meet Your Maker HI Logo" /></Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/cart" className='nav-links' onClick={closeMobileMenu}>
                                <i className="fas fa-shopping-cart" id='cart'></i>
                                <span id="cart-span">{cart.length}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
