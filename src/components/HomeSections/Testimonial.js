import React from 'react'

const Testimonial = ({testimonial}) => {
    return (
        <div class="testimonial__card swiper-slide">
            <div class="testimonial__quote">
                <i class="ri-double-quotes-l"></i>
            </div>

            <p class="testimonial__description">
                {testimonial.description}
            </p>

            <h3 class="testimonial__date">{testimonial.date}</h3>

            <div class="testimonial__perfil">
                <img src={testimonial.image} alt="" class="testimonial__img" />

                <div class="testimonial__perfil-data">
                    <span class="testimonial__perfil-name">{testimonial.client_name}</span>
                    <span class="testimonial__perfil-detail">{testimonial.client_profession}</span>
                </div>
            </div>

            <div class="testimonial__quote-bottom">
                <i class="ri-double-quotes-r"></i>
            </div>
        </div>
    )
}

export default Testimonial
