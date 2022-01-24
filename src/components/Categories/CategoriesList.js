import React from 'react'
import styled from 'styled-components'
import Category from './Category'


const Section = styled.section`
.categories__section-title{
    font-weight: 700;
    margin-bottom: var(--mb-0-25);
}

.categories__section-subtitle{
    display: block;
    text-align: center;
    margin-bottom: var(--mb-2-5);
}

.categories__list{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem 2rem;
    flex-wrap: wrap;
}

.category__item{
    border: 1px solid black;
    width: 125px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.category__link{
    color: var(--text-color);
}

.category__link:hover{
    color: var(--first-color);
}

`

const CategoriesList = ({allCategories}) => {
    return (
        <Section>
            <section className='categories section container' >
                <h2 className='section__title categories__section-title' >Categories</h2>
                <span className='categories__section-subtitle' >All the categories</span>

                <div className='categories__container grid' >
                    <ul className='categories__list' >
                        {allCategories.map(category => (
                            <Category key={category.slug} name={category.name} />
                        ))}
                    </ul>
                </div>
            </section>
        </Section>
    )
}

export default CategoriesList

