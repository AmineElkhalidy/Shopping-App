import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Cart from '../Cart/Cart';

const Header = ({cart, onRemoveFromCart, onEmptyCart, onUpdateCartQty}) => {
    const showCartHandler = () => {
        const cartMenu = document.getElementById('cart');
        const cartShop = document.getElementById('cart-shop');
        const cartClose = document.getElementById('cart-close');

        if(cartShop){
            cartShop.addEventListener('click', () => {
                cartMenu.classList.add('show-cart');
            })
        }

        if(cartClose){
            cartClose.addEventListener('click', () =>{
                cartMenu.classList.remove('show-cart');
            })
        }
    };
    return (
        <>
            <header className="header" id="header">
                <nav className="nav container">
                    <Link to="/" >
                        <a className="nav__logo">
                            <i className="ri-store-2-line nav__icon-flex"></i> Shop Store
                        </a>

                    </Link>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <NavLink to='/' activeClassName='active-link' >
                                    <a className="nav__link">
                                        <i className="ri-home-2-line nav__icon"></i>
                                        <span className="nav__name">Home</span>
                                    </a>
                                </NavLink>

                            </li>


                            <li className="nav__item">
                                <Link to='/products'>
                                    <a className="nav__link">
                                        <i className="ri-shopping-bag-line nav__icon"></i>
                                        <span className="nav__name">Shop</span>
                                    </a>
                                </Link>

                            </li>

                            <li className="nav__item">
                                <Link to='/about' >
                                    <a className="nav__link">
                                        <i className="ri-user-star-line nav__icon"></i>
                                        <span className="nav__name">About</span>
                                    </a>
                                </Link>

                            </li>

                            <li className="nav__item">
                                <Link to='/contact' >
                                    <a  className="nav__link">
                                        <i className="ri-send-plane-2-line nav__icon"></i>
                                        <span className="nav__name">Contact</span>
                                    </a>
                                </Link>

                            </li>
                        </ul>
                    </div>

                    <div class="nav__btns">
                        <button class="nav__shop" id="cart-shop" onClick={showCartHandler} >
                            <span className='nav__shop-slogan' >
                                <span className='slogan'>{cart.total_items}</span>
                            </span>
                            <i class="ri-shopping-cart-line nav__icon-flex"></i>
                        </button>

                        <div class="nav__user" id="nav-user">
                            <a class="nav__link" href="">
                                <i class="ri-user-line nav__icon-flex"></i>
                            </a>
                        </div>

                    </div>
                </nav>
            </header>
            <Cart cart={cart} onRemoveFromCart={onRemoveFromCart} onEmptyCart={onEmptyCart} onUpdateCartQty={onUpdateCartQty} />
        </>
    )
}

export default Header
