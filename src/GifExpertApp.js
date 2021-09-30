import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GigGrid } from './components/GigGrid';

export const GifExpertApp = ({defaultCategories = []}) => {
//Argumento {defaultCategories = []} en la fn GifExpertApp es para enviar un arreglo
//Es decir se envian unas caterigorias por default

    const [categories, setCategories] = useState(defaultCategories);
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr />

            <ol>
            {
                categories.map( category => (
                    <GigGrid
                        key = { category } 
                        category = { category }
                    />
                ))
            }
            </ol>
        </>
    )
}
