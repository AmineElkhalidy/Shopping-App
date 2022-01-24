import React from 'react'

const Category = ({name}) => {
    return (
        <li className='category__item'>
            <a className='category__link' href='' >
                {name} 
            </a>
        </li>
    )
}

export default Category

