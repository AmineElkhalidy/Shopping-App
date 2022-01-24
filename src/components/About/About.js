import React, { useEffect } from 'react'
import styled from 'styled-components'


const Section = styled.section`
.about__section-title{
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: var(--mb-0-25);
}

.about__section-description{
    text-align: center;
    margin-bottom: var(--mb-2-5);
}

.about__section-data{
    text-align: center;
}

.about__img{
    width: 300px;
    height: 280px;
    justify-self: center;
    margin-bottom: var(--mb-1-5);
}

.about__title{
    font-weight: 700;
    margin-bottom: var(--mb-0-25);
}

.about__subtitle{
    display: block;
    font-weight: 600;
    margin-bottom: var(--mb-1);
}

.about__description{
    padding: 0 0.5rem;
    margin-bottom: var(--mb-1);
}

.about__perfil-data{
    text-align: center;
}

.about__perfil-title{
    margin-bottom: var(--mb-0-5);
}

.about__perfil-social{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .75rem;
    margin-bottom: var(--mb-1);
}

.about__icon{
    font-size: 1.5rem;
    color: var(--title-color);
}

.about__icon:hover{
    color: var(--first-color);
}

.about__perfil-location{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .25rem;
}

.special{
    margin-bottom: 2.25rem;
}

@media screen and (min-width: 767px)
{
    .about__section-data{
        grid-template-columns: repeat(2, 1fr);
    }

    .about__data{
        padding: 0 0 1rem 0;
    }

    .about__img,
    .about__description{
        margin-bottom: 0;
    }

    .about__img{
        width: 320px;
        height: 300px;
    }

    .about__section-data{
        margin-bottom: var(--mb-2-5);
    }

    .about__perfil-container{
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (min-width: 992px){
    .about__img{
        width: 340px;
    }

    .about__data{
        padding: 1rem 0 0 0;
    }
}

@media screen and (min-width: 1024px){
    .about__section-description{
        margin-bottom: 4rem;
    }
}
`

const About = () => {
    useEffect(() => {
        document.title = 'About Us';
    }, []);
    return (
        <Section className='about section container' >
            <h2 className='section__title about__section-title' >About Us</h2>
            <p className='about__section-description' >A few words about us</p>

            <div className='about__container grid' >
                <div className='about__section-data grid' >
                    <img src='/assets/images/store.png' alt='' className='about__img' />

                    <div className='about__data' >
                        <h3 className='about__title' >Shop Store</h3>
                        <span className='about__subtitle' >
                            Shop from our online store, and the get the best products. 
                        </span>

                        <p class="about__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quos explicabo voluptatum iure, neque accusantium totam autem eos mollitia ex? Voluptates voluptas molestiae nemo nobis assumenda laborum, quis, debitis ex accusantium officia id explicabo, aliquid facilis veritatis quod quo velit corporis? Consectetur veritatis nostrum omnis voluptatem at. Magnam, cum. Dicta.
                        </p>
                    </div>
                </div>

                <div className='about__perfil-container grid' >
                    <div className='about__perfil-data' >
                        <h3 className='about__perfil-title' >Follow Us On :</h3>
                        <div className='about__perfil-social'>
                            <a href="#" class="about__perfil-social-link">
                                <i class="ri-facebook-fill about__icon"></i>
                            </a>
                            <a href="#" class="about__social-link">
                                <i class="ri-twitter-fill about__icon"></i>
                            </a>

                            <a href="#" class="about__social-link">
                                <i class="ri-instagram-fill about__icon"></i>
                            </a>
                        </div>
                    </div>

                    <div className='about__perfil-data special' >
                        <h3 className='about__perfil-title' >Location :</h3>
                        <span className='about__perfil-location' >
                            <i class="ri-map-pin-2-fill about__icon"></i> Ain Chock, Casablanca.
                        </span>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default About
