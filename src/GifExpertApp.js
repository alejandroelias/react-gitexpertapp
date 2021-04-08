import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GigGrid } from './components/GigGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState( ['Rick and Morty']);
    
    // const handleAdd = () =>{

    //     // setCategories([...categories, 'Dark']) 
    //     setCategories( cats => [...categories, 'Dark']);
        
    // }

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
