import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';



export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                });

            })

    }, [category])

    return state;
}


//la importacion de import React from 'react', NO es necesario en este
//archivo porque esta funcion NO retorna JSX