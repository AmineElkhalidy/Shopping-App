import React, { useEffect, useState } from 'react'
import commerce from '../../lib/commerce'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const DIV = styled.div`
.centered{
    width: 100%;
    margin: 0 auto;
}
.product__page{
    padding: 2rem 0 1rem 0;
    margin-bottom: 3rem;
}

.main__img{
    width: 280px;
    height: 300px;
    justify-self: center;
    margin-bottom: var(--mb-1-5);
}

.small-img-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--mb-1-5);
}

.small-img-row img{
    cursor: pointer;
}

.centered{
    text-align: center;
}

.col-2 h3{
    margin-bottom: var(--mb-0-5);
}

.col-2 input{
    outline: none;
    width: 20.5%
}

.quantity__container{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .5rem;
    margin-bottom: var(--mb-1);
}

.btn{
    cursor: pointer;
    margin-bottom: var(--mb-2-5);
}

.col-2 h3{
    font-weight: 700;
}

.last{
    margin-bottom: var(--mb-1);
}

@media screen and (max-width: 320px){
    .main__img{
        height: 150px;
    }
}

@media screen and (min-width: 400px){
    .main__img{
        width: 50%;
        height: 50%;
    }
}

@media screen and (min-width: 767px){
    .product__page{
        margin-top: 4rem;
    }

    .row{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .row-2{
        margin-top: 1.5rem;
        text-align: center;
    }
}
`

const ProductDetails = ({onAddToCart}) => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        retrieveProduct();
    }, []);

    const retrieveProduct = async () => {
        const product = await commerce.products.retrieve(params.permalink, {type: 'permalink'});
        setProduct(product);
        setLoading(false);
    }

    if(loading){
        return <p className='centered section' >Loading...</p>
    }

    const handleAddToCart = () => {
        const quantity = document.getElementById('quantity').value;
        onAddToCart(product.id, quantity);
    };
    return (
        <DIV>
            <div className='section product__page container' >
                <h2 className='section__title product__page-title' >Product Information</h2>


                <div className='product__page-container single-product grid' >
                    <div className='row' >
                        <div className='col-2 grid' >
                            <img src={product.image?.url} className='main__img' alt='' />

                            <div className='small-img-row' >
                                <div className='small-img-col' >
                                    <img src={product.image?.url} alt='' />
                                </div>

                                <div className='small-img-col' >
                                    <img src={product.image?.url} alt='' />
                                </div>

                                <div className='small-img-col' >
                                    <img src={product.image?.url} alt='' />
                                </div>

                                <div className='small-img-col' >
                                    <img src={product.image?.url} alt='' />
                                </div>
                            </div>
                        </div>

                        <div className='col-2 centered' >
                            <p>Products / T-Shirt</p>
                            <h2>{product.name}</h2>
                            <h3>{product.price.formatted_with_symbol}</h3>
                            <div className='quantity__container' >
                                <span>Specify the quantity :</span>
                                <input type='number' min='1' id='quantity' />
                            </div>
                            <a className='button btn' onClick={handleAddToCart} >Add To Cart</a>

                        </div>
                    </div>

                    <div className='row-2' >
                        <h3>Product Description</h3>
                        <p className='last' >
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </DIV>
    )
}

export default ProductDetails
