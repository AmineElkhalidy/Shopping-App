import React from 'react'
import styled from 'styled-components'

const DIV = styled.div`
.product__card{
    position: relative;
    background-color: transparent;
    padding: 1.25rem 0;
    border: 2px solid var(--first-color);
    text-align: center;
    transition: .3s;
    cursor: pointer;
}

.product__card:hover{
    box-shadow: 0 8px 32px hsla(0, 0%, 0%, .7);
}

.product__img{
    display: block;
    height: 200px;
    width: 180px;
    margin: 0 auto .5rem auto;
}

.product__rating{
    margin-bottom: var(--mb-1);
}

.product__title,
.product__price{
    font-size: var(--h3-font-size);
}

.product__price{
    display: block;
    font-weight: 700;
    color: var(--first-color);
}
`

const Product = ({product}) => {
    return (
        <DIV>
            <div className='product__card'>
                <img src={product.image?.url} alt="" class="product__img" />

                <div className="product__rating">
                    <i className="ri-star-line product__rating-icon"></i>
                    <i className="ri-star-line product__rating-icon"></i>
                    <i className="ri-star-line product__rating-icon"></i>
                    <i className="ri-star-line product__rating-icon"></i>
                    <i className="ri-star-line product__rating-icon"></i>
                </div>

                <div className="product__data">
                    <h3 className="product__title">{product.name}</h3>
                    <span className="product__price">{product.price.formatted_with_symbol}</span>
                </div>
            </div>
        </DIV>
    )
}

export default Product
