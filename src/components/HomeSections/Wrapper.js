import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/pagination"
import Testimonial from './Testimonial';

// import Swiper core and required modules
import SwiperCore, {
    Pagination
  } from 'swiper';
import NewItem from './New';
import { NavLink } from 'react-router-dom';
  
  // install Swiper modules
  SwiperCore.use([Pagination]);

const TESTIMONIALS = [
    {
        id: 'T1',
        description: 'This shop store is the best one, I always get the best product when i demand for one with best service and also with best pricing, i really recommend it for you.',
        image: '/assets/images/testimonial1.jpg',
        date: 'December 22. 2021',
        client_name: 'Younesse Elkhalidy',
        client_profession: 'client'
    },
    {
        id: 'T2',
        description: 'This shop store is the best one, I always get the best product when i demand for one with best service and also with best pricing, i really recommend it for you.',
        image: '/assets/images/testimonial2.jpg',
        date: 'December 22. 2021',
        client_name: 'Nawal Elkhalidy',
        client_profession: 'client'
    },
    {
        id: 'T1',
        description: 'This shop store is the best one, I always get the best product when i demand for one with best service and also with best pricing, i really recommend it for you.',
        image: '/assets/images/testimonial3.jpg',
        date: 'December 22. 2021',
        client_name: 'Amine Elkhalidy',
        client_profession: 'client'
    },
];

const NEW = [
    {
        id: 'N1',
        image: '/assets/images/new1.png',
        name: 'PackBack',
        price: '$45'
    },
    {
        id: 'N2',
        image: '/assets/images/new2.png',
        name: 'Wallet',
        price: '$100'
    },
    {
        id: 'N3',
        image: '/assets/images/new3.png',
        name: 'Glasses',
        price: '$15'
    },
    {
        id: 'N4',
        image: '/assets/images/new4.png',
        name: 'Watch',
        price: '$100'
    },
    {
        id: 'N5',
        image: '/assets/images/new5.png',
        name: 'Men Wallet',
        price: '$20'
    },
    {
        id: 'N6',
        image: '/assets/images/new6.png',
        name: 'Women Sack',
        price: '$1000'
    },
];

const Wrapper = () => {
    useEffect(() => {
        document.title = 'Shop Store';

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

    }, []);
    return (
        <>
            
            <main className='main'>
                <section class="home section" id="home">
                    <div class="home__container container grid">
                        <img src="/assets/images/home.png" alt="" class="home__img" />
                        <div class="home__data">
                            <h2 class="home__title">
                                Welcome To Our<br />Shopping Store
                            </h2>

                            <p class="home__description">
                                Shop from the store and get<br /> the best quality of products.
                            </p>

                            <a href="#products" class="button">
                                Explore
                            </a>
                        </div>
                    </div>
                </section>

                <section className="section container featured">
                    <h2 className="section__title featured__section-title">Featured Products</h2>
                    <p className='featured__section-description' >Some of our featured products.</p>

                    <div className="featured__container grid">

                        <article className="featured__card">
                            <span className="featured__tag">Sale</span>
                            <img src="./assets/images/feature1.png" alt="" className="featured__img" />

                            <div className="featured__data">
                                <h3 className="featured__title">Headphone</h3>
                                <span className="featured__price">$25</span>
                            </div>
                            
                            <button className="button featured__button">
                                ADD TO CART
                            </button>
                        </article>

                        <article className="featured__card">
                            <span className="featured__tag">Sale</span>
                            <img src="./assets/images/feature2.png" alt="" className="featured__img" />

                            <div className="featured__data">
                                <h3 className="featured__title">Power Bank</h3>
                                <span className="featured__price">$50</span>
                            </div>
                            
                            <button className="button featured__button">
                                ADD TO CART
                            </button>
                        </article>

                        <article className="featured__card">
                            <span className="featured__tag">Sale</span>
                            <img src="./assets/images/feature3.png" alt="" className="featured__img" />

                            <div className="featured__data">
                                <h3 className="featured__title">EarPods</h3>
                                <span className="featured__price">$35</span>
                            </div>
                            
                            <button className="button featured__button">
                                ADD TO CART
                            </button>
                        </article>

                        <article className="featured__card">
                            <span className="featured__tag">Sale</span>
                            <img src="./assets/images/feature4.png" alt="" className="featured__img" />

                            <div className="featured__data">
                                <h3 className="featured__title">Apple Watch</h3>
                                <span className="featured__price">$100</span>
                            </div>
                            
                            <button className="button featured__button">
                                ADD TO CART
                            </button>
                        </article>

                    </div>
                </section>

                <section className="story section container">
                    <h2 className="section__title story__section-title">Our Story</h2>
                    <p className='story__section-description' >Few words about our store</p>

                    <div className="story__container grid">
                        <img src="./assets/images/story.jpg" alt="" className="story__img" />
                        <div className="story__data">
                            <p className="story__description">
                                The 'Shop Store' exists to offer to you the best client serving experience along with the best products on term of quality.<br />
                                See what people say about us :
                            </p>

                            <a href="#testimonial" className="button story__button">Explore</a>
                        </div>
                    </div>
                </section>

                <section className="products section container" id="products"> 
                    <h2 className="section__title products__section-title">Products</h2>
                    <p className='products__section-description' >Some of store products</p>
                    <div className="products__container grid">
                        <article className="products__card">
                            <img src="/assets/images/feature1.png" alt="" className="products__img" />

                            <h3 className="products__title">Headphone</h3>
                            <span className="products__price">$25</span>

                            <button className="products__button">
                                <i className="ri-shopping-bag-line products__icon"></i>
                            </button>
                        </article>

                        <article className="products__card">
                            <img src="/assets/images/feature2.png" alt="" className="products__img" />

                            <h3 className="products__title">Power Bank</h3>
                            <span className="products__price">$50</span>

                            <button className="products__button">
                                <i className="ri-shopping-bag-line products__icon"></i>
                            </button>
                        </article>

                        <article className="products__card">
                            <img src="/assets/images/feature3.png" alt="" className="products__img" />

                            <h3 className="products__title">EarPods</h3>
                            <span className="products__price">$35</span>

                            <button className="products__button">
                                <i className="ri-shopping-bag-line products__icon"></i>
                            </button>
                        </article>

                        <article className="products__card">
                            <img src="/assets/images/feature4.png" alt="" className="products__img" />

                            <h3 className="products__title">Apple Watch</h3>
                            <span className="products__price">$100</span>

                            <button className="products__button">
                                <i className="ri-shopping-bag-line products__icon"></i>
                            </button>
                        </article>
                    </div>
                    <div className='products__action'>
                        <NavLink to='/products' activeClassName='active-link' >
                            <a className='button'>Explore More</a>
                        </NavLink>
                        
                    </div>
                </section>

                <section className="sponsor section">
                    <h2 className="section__title sponsor__section-title">Brands</h2>
                    <p className='sponsor__section-description' >Some of famous brands our store has</p>
                    <div class="sponsor__container container grid">
                        <img src="./assets/images/logo1.png" alt="" className="sponsor__img" />
                        <img src="./assets/images/logo2.png" alt="" className="sponsor__img" />
                        <img src="./assets/images/logo3.png" alt="" className="sponsor__img" />
                        <img src="./assets/images/logo4.png" alt="" className="sponsor__img" />
                        <img src="./assets/images/huawei.png" alt="" className="sponsor__img-new" />
                        <img src="./assets/images/apple.png" alt="" className="sponsor__img-new" />
                        <img src="./assets/images/samsung.png" alt="" className="sponsor__img-new" />
                    </div>
                </section>

                <section className='testimonial section container' id='testimonial' >
                    <h2 className='testimonial__section-title section__title ' >Testimonial</h2>
                    <p className='testimonial__section-description' >Some of our clients reviews</p>

                    <div className='testimonial__container grid' >
                        <Swiper className='swiper' spaceBetween={30}
                                pagination={{"dynamicBullets": true}}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                      slidesPerView: 3,
                                    },
                                    1024: {
                                      slidesPerView: 3,
                                    }
                                }} >
                            {TESTIMONIALS.map(testimonial => (
                                <SwiperSlide key={testimonial.id} >
                                    <Testimonial key={testimonial.id} testimonial={testimonial} />
                                </SwiperSlide>
                                
                            ))}
                        </Swiper>
                    </div>
                </section>

                <section className='new section container' >
                    <h2 className='section__title new__section-title' >New</h2>
                    <p className='new__section-description' >Some of new products</p>

                    <div className='new__container grid' >
                        <Swiper spaceBetween={30}
                                className='swiper'
                                breakpoints={{
                                    576: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                      slidesPerView: 3,
                                    },
                                    1024: {
                                      slidesPerView: 4,
                                    }
                                }}
                                pagination={{'dynamicBullets': true}}>
                            {NEW.map(product => (
                                <SwiperSlide key={product.key} >
                                    <NewItem key={product.id} data={product} />
                                </SwiperSlide>
                                
                            ))}
                        </Swiper>
                    </div>

                </section>

                <section class="newsletter section container">
                    <div class="newsletter__bg grid">
                        <div>
                            <h2 class="newsletter__title">
                                Subscribe Our <br /> Newsletter
                            </h2>
            
                            <p class="newsletter__description">
                                Don't miss out on your discount, Subscribe to the Newsletter
                                to get the best offers, discounts, gifts and much more.
                            </p>
                        </div>
                        <form action="" class="newsletter__subscribe">
                            <input type="email" placeholder="Enter your email" class="newsletter__input" />
                            <button class="subscribe__button">
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            
            <footer class="footer section">
                <div class="footer__container container grid">
                    <div class="footer__content">
                        <h3 class="footer__title">Our information</h3>

                        <ul class="footer__list">
                            <li>Shop Store</li>
                            <li>Ain Chock - Casablanca</li>
                            <li>0506070809</li>
                        </ul>
                    </div>

                    <div class="footer__content">
                        <h3 class="footer__title">About Us</h3>

                        <ul class="footer__links">
                            <li>
                                <a href="#" class="footer__link">Support Center</a>
                            </li>

                            <li>
                                <a href="#" class="footer__link">Customer Support</a>
                            </li>

                            <li>
                                <a href="#" class="footer__link">About us</a>
                            </li>

                            <li>
                                <a href="#" class="footer__link">Copy right</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer__content">
                        <h3 class="footer__title">Product</h3>

                        <ul class="footer__links">
                            <li>
                                <a href="#" class="footer__link">Road Bikes</a>
                            </li>

                            <li>
                                <a href="#" class="footer__link">Mountain Bikes</a>
                            </li>

                            <li>
                                <a href="#" class="footer__link">Electric</a>
                            </li>

                            <li>
                                <a href="#" class="footer__link">Accesories</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer__content">
                        <h3 class="footer__title">Social</h3>

                        <ul class="footer__social">
                            <a href="#" target="_blank" class="footer__social-link">
                                <i class="ri-facebook-fill"></i>
                            </a>

                            <a href="#" target="_blank" class="footer__social-link">
                                <i class="ri-twitter-fill"></i>
                            </a>

                            <a href="#" target="_blank" class="footer__social-link">
                                <i class="ri-instagram-fill"></i>
                            </a>
                        </ul>
                    </div>
                </div>

                <span class="footer__copy">Amine Elkhalidy - All rights reserved.</span>
            </footer>

            <a href="#" className="scrollup" id="scroll-up">
                <i className="ri-arrow-up-line scrollup__icon"></i>
            </a>
        </>
    )
}

export default Wrapper
