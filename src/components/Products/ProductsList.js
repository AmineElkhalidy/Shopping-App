import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'
import styled from 'styled-components'
import CategoriesList from '../Categories/CategoriesList'

const Section = styled.section`
.addition{
    margin-bottom: 2.5rem;
}
.centered{
    text-align: center;
}

.products-section{
    padding: 2rem 0 1rem;
}

`

const ProductsList = ({products, loading, categories}) => {
    useEffect(() => {
        document.title = 'Products'
    }, []);

    if(loading){
        return <p className='section centered'>Loading...</p>
    }
    return (
        <>
        <CategoriesList allCategories={categories} />
        <Section>
            <section className='products section products-section container'>
            <h2 className='section__title product__section-title' >Products List</h2>
            <div className='products__container addition grid' >
                {products.map(product => (
                    <Link to={`/products/${product.permalink}`} >
                        <Product key={product.id} product={product} />
                    </Link>
                ))}
            </div>
            </section>
        </Section>
        </>
    )
}

export default ProductsList
