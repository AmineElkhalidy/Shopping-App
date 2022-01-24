import React from 'react'

const NewItem = ({ data }) => {
    return (
        <article class="new__card swiper-slide">
            <span class="new__tag">New</span>
        
            <img src={data.image} alt="" class="new__img" />
            <div class="new__data">
                <h3 class="new__title">{data.name}</h3>
                <span class="new__price">{data.price}</span>
            </div>
        
            <button class="new__button">ADD TO CART</button>
        </article>
    )
}

export default NewItem
