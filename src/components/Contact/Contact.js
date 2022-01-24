import React, { useEffect } from 'react'
import styled from 'styled-components'


const Section = styled.section`
.contact__section-title{
    font-weight: 700;
    text-transform: uppercase;
}

.contact__data,
.contact__container{
    row-gap: 1rem;
}

.contact__data > div {
    display: flex;
    align-items: center;
    column-gap: .5rem;
}

.contact__icon{
    font-size: 1.5rem;
    color: var(--first-color);
}

.contact__icon-send{
    font-size: 1.5rem;
}

.contact__form{
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
}

.input__form{
    padding: 1.15rem 1rem;
    margin-bottom: var(--mb-1);
}

.textarea{
    font-family: var(--body-font);
}

.button{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.5rem
}

@media screen and (max-width: 390px){
    .container{
        margin-right: var(--mb-1);
        margin-left: var(--mb-1);
    }

    .contact__form{
        align-items: center;
    }

    .input__form{
        width: 100%;
    }
}

@media screen and (min-width: 576px){
    .contact__form{
        align-items: center;
    }

    .input__form,
    .button{
        width: 70%;
    }

    .contact__container{
        row-gap: 2rem;
    }
}

@media screen and (min-width: 767px){
    .contact__section-title{
        margin-bottom: 4rem;
    }

    .contact__form{
        margin-bottom: 0;
    }
    
    .contact__container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (min-width: 992px){
    .input__form{
        width: 100%;
    }
    .button{
        width: 50%;
    }
}

`

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Us'
    }, []);
    return (
        <Section className="contact section container">
            <h2 className="section__title contact__section-title">Contact Us</h2>

            <div className="contact__container grid">
                <div className="contact__data grid">
                    
                    <div><i className="ri-map-pin-2-fill contact__icon"></i> Address, City, Country</div>
                    <div><i className="ri-mail-fill contact__icon"></i> Contact-email@gmail.com</div>
                    <div><i className="ri-phone-fill contact__icon"></i> +212-0607080910</div>
                    <div><i className="ri-time-fill contact__icon"></i> Monday - Saturday | 8:00 AM To 6:00 PM</div>

                    
                </div>
                <form action="" className="contact__form">
                    <input type="text" placeholder="Your name" className="input__form" />
                    <input type="text" placeholder="Your email" className="input__form" />

                    <textarea rows="5" className="input__form textarea" placeholder="Your message" ></textarea>

                    <button className="button">Send <i class="ri-send-plane-fill contact__icon-send"></i></button>
                </form>
                
            </div>
        </Section>
    )
}

export default Contact

